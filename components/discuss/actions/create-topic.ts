"use server";

import DiscussPaths from "@/components/discuss/paths";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { auth } from "@/components/auth";
import type { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, {
      message: "Must be lowercase letters or dashes without spaces",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  if (!(await auth())?.user) {
    return {
      errors: {
        _form: ["You must be sign in to do this."],
      },
    };
  }

  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
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

  revalidatePath(DiscussPaths.home());
  redirect(DiscussPaths.topicShow(topic.slug));
}
