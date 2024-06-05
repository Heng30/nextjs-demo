import snippetCreateImg from '@/public/snippet-create.jpg';
import Hero from '@/components/hero';
import NewSnippet from '@/components/snippets/new';

export default function New() {
    return (
        <div className='w-full'>
            <Hero imgData={snippetCreateImg} imgAlt="create"></Hero>
            <NewSnippet />
        </div>

    )
}