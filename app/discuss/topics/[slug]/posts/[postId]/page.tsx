import Link from "next/link";
import paths from "@/components/discuss/paths";
import PostShow from "@/components/discuss/posts/post-show";
import CommentCreateForm from "@/components/discuss/comments/create-form";
import CommentList from "@/components/discuss/comments/list";
import { fetchCommentsByPostId } from "@/db/queries/comments";

interface Props {
  params: {
    slug: string;
    postId: string;
  };
}

export default function Show({ params: { slug, postId } }: Props) {
  return (
    <div className="overflow-y-scroll no-scrollbar p-4 w-full bg-white rounded">
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} />
      <CommentList fetchData={() => fetchCommentsByPostId(postId)} />
    </div>
  );
}
