"use server";

import type { Post } from "@prisma/client";
import paths from "@/components/discuss/paths";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";
import { auth } from "@/components/auth";
import { db } from "@/db";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const session = await auth();
  if (!session?.user) {
    return {
      errors: {
        _form: ["You must be sign in to do this."],
      },
    };
  }

  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  let post: Post;
  try {
    const topic = await db.topic.findFirst({
      where: { slug },
    });

    if (!topic) {
      return {
        errors: {
          _form: [`Can not find topic[${topic}]`],
        },
      };
    }

    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        topicId: topic.id,
        userId: session.user.id,
      },
    });
  } catch (err: unknown) {
    return {
      errors: {
        _form: [
          err instanceof Error
            ? (err as Error).message.toString()
            : "Internal error!",
        ],
      },
    };
  }

  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, post.id));
}
