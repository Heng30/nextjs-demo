import { PostWithData } from "@/db/queries/post";
import ListItem from "./list-item";

interface Props {
  fetchData: () => Promise<PostWithData[]>;
  isHome: boolean;
}

export default async function PostList({ fetchData, isHome }: Props) {
  const posts = await fetchData();
  const renderedPosts = posts.map((post) => {
    return <ListItem key={post.id} post={post} isHome={isHome} />;
  });

  return (
    <div className="flex-grow h-0 overflow-y-auto space-y-2 no-scrollbar">
      {renderedPosts}
    </div>
  );
}
