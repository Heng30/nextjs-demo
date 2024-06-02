import snippetCreateImg from '@/public/snippet-create.jpg';
import Hero from '@/components/hero';
import SnippetCreate  from '@/components/snippet/create';

export default function Create() {
    return (
        <div className='w-full'>
            <Hero imgData={snippetCreateImg} imgAlt="create"></Hero>
            <SnippetCreate />
        </div>

    )
}