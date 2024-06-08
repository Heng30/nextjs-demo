"use server";

import type { Topic } from "@prisma/client";
import paths from "@/components/discuss/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/components/auth";
import { db } from "@/db";
import { IconButtonFormState } from "@/components/common/icon-button";

export async function deleteTopic(
  topicId: string
): Promise<IconButtonFormState> {
  const session = await auth();
  if (!session?.user) {
    return { errors: ["You must be sign in to do this."] };
  }

  let topic: Topic;
  try {
    topic = await db.topic.delete({
      where: { id: topicId },
    });
  } catch (err: unknown) {
    return {
      errors: [
        err instanceof Error ? err.message.toString() : "Internal error!",
      ],
    };
  }

  revalidatePath(paths.home());
  redirect(paths.home());
}
