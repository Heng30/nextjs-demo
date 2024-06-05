import Hero from '@/components/hero';
import bgImg from '@/public/snippet-execute.png';
import SnippetShow from '@/components/snippets/show';
import { db } from '@/db';

interface Props {
    params: {
        id: string,
    }
}

export default async function ShowSnippet(props: Props) {
    // await new Promise((r) => setTimeout(r, 1000));

    const id = parseInt(props.params.id);
    return (
        <div className='w-full'>
            <Hero imgData={bgImg} imgAlt="execute"></Hero>
            <SnippetShow id={id} />
        </div>
    );
}

// Generate cache page for snippets
export async function generateStaticParams() {
    const snippets = await db.snippet.findMany();

    return snippets.map((snippet) => {
        return {
            id: snippet.id.toString(),
        }
    })
}