import homeImg from '@/public/home.jpg';
import Hero from '@/components/hero';
import CodeSnippet from '@/components/codeSnippetCreate';

export default function Home() {
  return (
    <div className='w-full'>
      <Hero imgData={homeImg} imgAlt="Linux Ghost"></Hero>;
      <CodeSnippet></CodeSnippet>
    </div>
  );
}
