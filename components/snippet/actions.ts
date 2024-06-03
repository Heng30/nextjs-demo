'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function updateSnippet(id: number, title: string, code: string) {
    const snippet = await db.snippet.update({
        where: {
            id
        },
        data: {
            title,
            code,
        },
    });

    redirect(`/snippet/${id}`);
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: {
            id
        }
    });

    redirect("/");
}