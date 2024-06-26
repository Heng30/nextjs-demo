import CommentCreateForm from "@/components/discuss/comments/create-form";
import { commentWithAuthor } from "@/db/queries/comments";
import { Avatar } from "@nextui-org/react";

interface Props {
  commentId: string;
  comments: commentWithAuthor[];
}

export default function CommentShow({ commentId, comments }: Props) {
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return (
      <CommentShow key={child.id} commentId={child.id} comments={comments} />
    );
  });

  return (
    <div className="p-4 border mt-2 mb-1 rounded">
      <div className="flex gap-3">
        <Avatar src={comment.user.image || ""} alt="user image" size="sm" />
        <div className="flex-1 space-y-3">
          <p className="text-sm font-medium text-gray-500">
            {comment.user.name}
          </p>
          <p className="text-gray-900">{comment.content}</p>

          <CommentCreateForm postId={comment.postId} parentId={comment.id} />
        </div>
      </div>
      <div className="pl-4">{renderedChildren}</div>
    </div>
  );
}
