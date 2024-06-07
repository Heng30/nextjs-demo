import SnippetShow from "@/components/snippets/show";
import { db } from "@/db";

interface Props {
  params: {
    id: string;
  };
}

export default async function ShowSnippet(props: Props) {
  // await new Promise((r) => setTimeout(r, 1000));

  const id = parseInt(props.params.id);
  return <SnippetShow id={id} />;
}

// Generate cache page for snippets
export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}
