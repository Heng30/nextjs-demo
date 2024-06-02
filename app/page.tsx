import homeImg from '@/public/home.jpg';
import Hero from '@/components/hero';
import SnippetList from '@/components/snippet/list';

export default function Home() {
  return (
    <div className='w-full'>
      <Hero imgData={homeImg} imgAlt="home"></Hero>
      <SnippetList />
    </div>
  );
}
