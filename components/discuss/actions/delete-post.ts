"use server";

import type { Post } from "@prisma/client";
import paths from "@/components/discuss/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/components/auth";
import { db } from "@/db";
import { IconButtonFormState } from "@/components/common/icon-button";

export async function deletePost(
  slug: string,
  postId: string,
  isHome: boolean = true
): Promise<IconButtonFormState> {
  const session = await auth();
  if (!session?.user) {
    return { errors: ["You must be sign in to do this."] };
  }

  let post: Post;
  try {
    post = await db.post.delete({
      where: { id: postId },
    });
  } catch (err: unknown) {
    return { errors: [`Delete post failed. error: ${err}`] };
  }

  revalidatePath(paths.home());
  revalidatePath(paths.topicShow(slug));

  if (isHome) {
    redirect(paths.home());
  } else {
    redirect(paths.topicShow(slug));
  }
}
