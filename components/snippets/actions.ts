'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createSnippet(formState: { message: string }, formData: FormData) {
    const title = formData.get('title')?.toString();
    const code = formData.get('code')?.toString();

    if (!title || title.length < 3) {
        return { message: "Title must be longer" }
    }

    if (!code || code.length === 0) {
        return { message: "No code provided" };
    }

    try {
        // throw new Error("Failed to save to database");
        await db.snippet.create({
            data: {
                title,
                code,
            },
        });

    } catch (e: unknown) {
        if (e instanceof Error) {
            return { message: e.message };
        } else {
            return { message: "Something went wrong..." };
        }
    }

    revalidatePath('/snippets');
    redirect('/snippets');

}

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

    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: {
            id
        }
    });

    revalidatePath("/snippets");
    redirect("/snippets");
}