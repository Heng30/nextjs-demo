import { db } from '@/db';
import editImg from '@/public/snippet-create.jpg';
import Hero from '@/components/hero';
import EditSnippet from '@/components/snippet/edit';

interface Props {
    params: {
        id: string,
    }
}

export default function Edit(props: Props) {
    const id = parseInt(props.params.id);

    return (
        <div>
            <Hero imgData={editImg} imgAlt="edit"></Hero>
            <EditSnippet id={id}></EditSnippet>
        </div>
    );
}