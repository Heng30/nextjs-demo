import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import DeleteBtn from "@/components/snippets/delete-btn";

interface Props {
  id: number;
}

export default async function Show(props: Props) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: props.id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div className="flex flex-col mx-auto w-2/3 h-full">
      <div className="flex justify-between font-bold mb-4">
        <h1 className="text-white text-2xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <DeleteBtn id={snippet.id} />
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="rounded border p-2 bg-white"
          >
            Edit
          </Link>
          <Link
            href={`/snippets/${snippet.id}/execute`}
            className="rounded border p-2 bg-white"
          >
            Execute
          </Link>
        </div>
      </div>
      <div className="h-1/2 bg-gray-200 rounded p-4 text-xl">
        {snippet.code}
      </div>
    </div>
  );
}
