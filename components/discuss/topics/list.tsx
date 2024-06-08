import { db } from "@/db";
import ListItem from "./list-item";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    return <ListItem key={topic.id} topic={topic} />;
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
}
