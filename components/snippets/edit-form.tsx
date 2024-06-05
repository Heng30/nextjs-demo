'use client';

import { startTransition, useState } from 'react';
import Editor from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import * as actions from '@/components/snippets/actions';

interface Props {
    snippet: Snippet,
}

export default function EditForm({ snippet }: Props) {
    const [title, setTitle] = useState(snippet.title);
    const [code, setCode] = useState(snippet.code);

    const updateSnippetAction = actions.updateSnippet.bind(null, snippet.id, title, code);

    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-bold m-3 mx-auto w-2/3">
                <h1 className="text-white text-6xl text-center mb-8">
                    Edit the Code Snippet
                </h1>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <label className="w-16 bg-blue-200 text-center rounded" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="border rounded p-2 w-full bg-gray-900 text-white"
                            defaultValue={title}
                            onChange={(e) => setTitle(e.target.value)}
                        ></input>
                    </div>

                    <div className="flex gap-4">
                        <label className="w-16 bg-blue-200 text-center rounded" htmlFor="code">
                            Code
                        </label>
                        <div className="w-full">
                            <Editor
                                height="40vh"
                                width="100%"
                                theme='vs-dark'
                                defaultLanguage="javascript"
                                defaultValue={snippet.code}
                                options={{ minimap: { enabled: false } }}
                                onChange={(v: string = "") => setCode(v)}
                            />
                        </div>
                    </div>

                    <form action={updateSnippetAction} className="w-full">
                        <button type="submit" className="text-black rounded bg-blue-200 p-4 w-full">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
}