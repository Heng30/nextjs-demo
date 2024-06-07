import { db } from "@/db";
import { notFound } from "next/navigation";

interface Props {
  postId: string;
}

export default async function PostShow({ postId }: Props) {
  const post = await db.post.findFirst({
    where: { id: postId },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="my-4 gap-2 flex flex-col">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="p-4 border rounded">{post.content}</p>
    </div>
  );
}
