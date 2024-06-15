'use client';

import Link from 'next/link';
import paths from '@/components/discuss/paths';
import { PostWithData } from '@/db/queries/post';
import IconButton from '@/components/common/icon-button';
import { DeleteIcon } from '@/components/icons';
import * as actions from '@/components/discuss/actions';
import { useFormState } from 'react-dom';
import { toast } from 'react-hot-toast';

interface Props {
  post: PostWithData;
  isHome: boolean;
}
export default function ListItem({ post, isHome }: Props) {
  const topicSlug = post.topic.slug;

  if (!topicSlug) {
    throw new Error('Need a slug to link to a post');
  }

  const [formState, action] = useFormState(
    actions.deletePost.bind(null, topicSlug, post.id, isHome),
    {}
  );

  return (
    <div className="flex justify-between border rounded py-2 pl-4 items-center">
      <Link href={paths.postShow(topicSlug, post.id)}>
        <h3 className="text-lg font-bold">{post.title}</h3>
        <div className="flex flex-row gap-8">
          <p className="text-xs text-gray-400">By {post.user.name}</p>
          <p className="text-xs text-gray-400">
            {post._count.comments} comments
          </p>
        </div>
      </Link>
      <form action={action}>
        <IconButton
          formState={formState}
          showToast={(msg) => {
            toast.error(msg);
          }}
        >
          {DeleteIcon()}
        </IconButton>
      </form>
    </div>
  );
}
