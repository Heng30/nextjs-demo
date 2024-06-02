import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function Create() {
  async function createSnippet(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect('/');
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
        <form action={createSnippet} className="font-bold m-3 mx-48 w-full">
          <h1 className="text-white text-6xl text-center mb-8">
            Create a Code Snippet
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <label className="w-16 bg-blue-200 text-center rounded" htmlFor="title">
                Title
              </label>
              <input
                className="border rounded p-2 w-full"
                name="title"
                id="title"
              ></input>
            </div>

            <div className="flex gap-4">
              <label className="w-16 bg-blue-200 text-center rounded" htmlFor="code">
                Code
              </label>
              <textarea
                className="border rounded p-2 w-full h-48"
                name="code"
                id="code"
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-black rounded bg-blue-200 p-4"
            >
              Create
            </button>
          </div>
        </form>
    </div>
  );
}
