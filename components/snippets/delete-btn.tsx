'use client';

import * as actions from '@/components/snippets/actions';
import { startTransition } from 'react';

interface Props {
    id: number,
}

export default function DeleteBtn(props: Props) {
    return (
        <form action={actions.deleteSnippet.bind(null, props.id)}>
            <button type="submit" className="rounded border p-2 bg-white">
                Delete
            </button >
        </form>
    );
}