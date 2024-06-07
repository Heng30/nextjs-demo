import SnippetExecute from "@/components/snippets/execute";
import { notFound } from "next/navigation";
import { db } from "@/db";

interface Props {
  params: {
    id: string;
  };
}

export default async function ExecuteSnippet(props: Props) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <SnippetExecute title={snippet.title} code={snippet.code}></SnippetExecute>
  );
}
