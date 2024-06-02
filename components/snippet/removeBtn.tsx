import React from 'react';
import { db } from '@/db';

interface BtnProps {
    text: string,
    className?: string,
    id?: number,
}

async function removeSnippet(id?: number) {
    'use server';

    if (id !== undefined) {
        await db.snippet.delete({
            where: {
                id
            }
        });
    }
}

export default function ExecuteBtn(props: BtnProps) {
    return (
        <button className={props.className} onClick={() => removeSnippet(props.id)}>
            {props.text}
        </button>
    );
};
