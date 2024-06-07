import DiscussHeader from "@/components/discuss/header";

export default function DiscussLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col items-center">
      <DiscussHeader />
      <div className="w-2/3 h-full flex justify-center mb-4 bg-gray-200 p-1 rounded">
        {children}
      </div>
    </div>
  );
}
