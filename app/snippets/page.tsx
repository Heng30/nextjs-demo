import bgImg from '@/public/home.jpg';
import Hero from '@/components/hero';
import SnippetList from '@/components/snippets/list';

export default function Snippets() {
  return (
    <div className='w-full'>
      <Hero imgData={bgImg} imgAlt="home"></Hero>
      <SnippetList />
    </div>
  );
}
