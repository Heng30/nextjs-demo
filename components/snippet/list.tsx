import Link from 'next/link';
import { db } from '@/db';

export default async function List() {
    const snippets = await db.snippet.findMany();

    const renderedSnippets = snippets.map((snippet) => {
        return <Link
            key={snippet.id}
            href={`/snippet/${snippet.id}`}
            className="flex w-2/3 text-xl bg-white justify-between font-bold rounded border items-center p-2"
        >
            <div>{snippet.title}</div>
            <div>View</div>
        </Link>
    });

    return (
        <div className="absolute inset-0 mt-32 flex flex-col items-center gap-4">
            <div className="flex justify-between w-2/3">
                <h1 className="text-xl font-bold rounded bg-white p-2">Snippet</h1>
                <Link href="/snippet/create" className="border p-2 rounded bg-white">Create</Link>
            </div>
            
            <div className="flex flex-col gap-2 items-center w-full">
                {renderedSnippets}
            </div>

        </div>
    )
}