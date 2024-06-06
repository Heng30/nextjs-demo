import SnippetList from '@/components/snippets/list';
import SnippetHeader from '@/components/snippets/header';

export default function Snippets() {
  return (
    <div className="absolute inset-0 flex flex-col gap-4 pt-8">
      <SnippetHeader />
      <SnippetList />
    </div>
  );
}
