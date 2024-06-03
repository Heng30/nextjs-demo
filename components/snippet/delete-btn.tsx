'use client';

import * as actions from '@/components/snippet/actions';
import { startTransition } from 'react';

interface Props {
    id: number,
}

export default function (props: Props) {
    return (
        <button
            onClick={() => {
                startTransition(async () => {
                    await actions.deleteSnippet(props.id);
                });
            }}
            className="rounded border p-2 bg-white"
        >
            Delete
        </button >
    );
}