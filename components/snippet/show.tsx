import { notFound } from 'next/navigation';
import { db } from '@/db';
import ExecuteBtn from '@/components/snippet/executeBtn';
import RemoveBtn from '@/components/snippet/removeBtn';

interface SnippetProps {
  id: number,
}

export default async function Show(props: SnippetProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: props.id
    }
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="font-bold m-3 mx-48 w-full">
        <h1 className="text-white text-6xl text-center mb-8">
          Execute a Code Snippet
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-16 text-center bg-blue-200 rounded" htmlFor="title">
              Title
            </label>
            <input
              className="border rounded p-2 w-full"
              name="title"
              id="title"
              value={snippet?.title}
            ></input>
          </div>

          <div className="flex gap-4">
            <label className="w-16 text-center bg-blue-200 rounded" htmlFor="code">
              Code
            </label>
            <textarea
              className="border rounded p-2 w-full h-48"
              name="code"
              id="code"
              value={snippet?.code}
            ></textarea>
          </div>

          <div className='flex space-x-4'>
            {/* <RemoveBtn
              text="Remove"
              id={snippet?.id}
              className="text-black rounded bg-blue-200 p-4 w-full"
            /> */}

            <ExecuteBtn
              text="Execute"
              code={snippet?.code}
              className="text-black rounded bg-blue-200 p-4 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
