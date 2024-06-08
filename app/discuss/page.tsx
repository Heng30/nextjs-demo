import { Divider } from "@nextui-org/react";
import TopicCreateForm from "@/components/discuss/topics/create-form";
import TopicList from "@/components/discuss/topics/list";
import TopPostList from "@/components/discuss/posts/list";
import { fetchTopPosts } from "@/db/queries/post";

export default function Discuss() {
  return (
    <div className="h-full w-full grid grid-cols-4 gap-2">
      <div className="flex flex-col col-span-3 p-4 bg-white rounded">
        <h1 className="text-2xl font-semibold m-2">Top Posts</h1>
        <TopPostList
          fetchData={() => fetchTopPosts()}
          isHome={true}
        ></TopPostList>
      </div>
      <div className="flex flex-col border shadow-sm py-3 px-2 rounded bg-white">
        <TopicCreateForm></TopicCreateForm>
        <Divider className="my-4"></Divider>
        <h1 className="text-lg mb-2">Topics</h1>
        <TopicList></TopicList>
      </div>
    </div>
  );
}
