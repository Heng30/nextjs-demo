import PostCreateForm from "@/components/discuss/post/create-form";
import { fetchPostsByTopicSlug } from "@/db/queries/post";
import PostList from "@/components/discuss/posts/list";

interface Props {
  params: {
    slug: string;
  };
}

export default function Slug({ params }: Props) {
  const { slug } = params;

  return (
    <div className="w-full h-full grid grid-cols-4 gap-4 p-4 bg-white rounded">
      <div className="col-span-3">
        <h1 className="text-2xl font-semibold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
      <div className="flex justify-end">
        <PostCreateForm slug={slug}></PostCreateForm>
      </div>
    </div>
  );
}
