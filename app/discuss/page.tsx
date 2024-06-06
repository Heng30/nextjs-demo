import { Divider } from "@nextui-org/react";
import TopicCreateForm from "@/components/discuss/topics/create-form";
import TopicList from "@/components/discuss/topics/list";
import TopPostList from "@/components/discuss/posts/list";
import { fetchTopPosts } from "@/db/queries/post";

export default function Discuss() {
  return (
    <div className="w-full h-full grid grid-cols-4 gap-4 rounded">
      <div className="col-span-3 flex flex-col justify-start bg-white">
        <h1 className="text-2xl m-2">Top Posts</h1>
        <TopPostList fetchData={() => fetchTopPosts()}></TopPostList>
      </div>
      <div className="border shadow-sm py-3 px-2 rounded bg-white">
        <TopicCreateForm></TopicCreateForm>
        <Divider className="my-2"></Divider>
        <h1 className="text-lg mb-2">Topics</h1>
        <TopicList></TopicList>
      </div>
    </div>
  );
}
