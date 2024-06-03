import { db } from '@/db';
import { notFound, redirect } from 'next/navigation';
import SnippetFormEdit from '@/components/snippet/edit-form';

interface Props {
    id: number,
}

export default async function Edit(props: Props) {
    const snippet = await db.snippet.findFirst({
        where: {
            id: props.id,
        }
    });

    if (!snippet) {
        return notFound();
    }

    return (
        <SnippetFormEdit snippet={snippet} />
    );
}