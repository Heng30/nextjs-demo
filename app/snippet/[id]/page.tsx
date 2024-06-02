import Hero from '@/components/hero';
import snippetExecuteImg from '@/public/snippet-execute.png';
import SnippetShow from '@/components/snippet/show';

interface ExecuteProps {
    params: {
        id: string,
    }
}

export default async function ShowSnippet(props: ExecuteProps) {
    await new Promise((r) => setTimeout(r, 1000));
     
    const id = parseInt(props.params.id);
    return (
        <div className='w-full'>
            <Hero imgData={snippetExecuteImg} imgAlt="execute"></Hero>
            <SnippetShow id={id} />
        </div>
    );
}