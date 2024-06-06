import DiscussHeader from '@/components/discuss/header';

export default function DiscussLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col absolute inset-0 items-center'>
      <DiscussHeader />
      <div className='flex justify-center w-2/3'>
        {children}
      </div>
    </div>
  );
}
