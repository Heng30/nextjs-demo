import PostCreateForm from "@/components/discuss/post/create-form";
import { fetchPostsByTopicSlug } from "@/db/queries/post";
import PostList from "@/components/discuss/posts/list";
import { db } from "@/db";
import { Divider } from "@nextui-org/react";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Slug({ params }: Props) {
  const { slug } = params;

  const topic = await db.topic.findFirst({
    where: { slug },
  });

  return (
    <div className="w-full h-full grid grid-cols-4 gap-2">
      <div className="overflow-y-scroll no-scrollbar col-span-3 p-4 bg-white rounded">
        <h1 className="text-2xl font-semibold m-2">{slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
      <div className="flex flex-col py-3 px-2 bg-white rounded">
        <PostCreateForm slug={slug}></PostCreateForm>
        <Divider className="my-4"></Divider>
        <h1 className="text-lg mb-2">Description</h1>
        {topic?.description ? (
          <div className="text-gray-500">{topic.description}</div>
        ) : null}
      </div>
    </div>
  );
}
