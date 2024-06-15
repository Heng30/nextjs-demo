import { getDictionary } from '@/components/dictionaries';

interface Props {
  params: {
    lang: string;
  };
}

export default async function Page({ params: { lang } }: Props) {
  const dict = await getDictionary(lang == 'zh' ? 'zh' : 'en');
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <button className="text-3xl p-2 bg-red-100 border rounded border-red-300">
        {dict.products.cart}
      </button>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }];
}
