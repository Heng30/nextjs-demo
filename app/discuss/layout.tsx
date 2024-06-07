import DiscussHeader from "@/components/discuss/header";

export default function DiscussLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col items-center">
      <DiscussHeader />
      <div className="w-2/3 h-full overflow-hidden flex justify-center p-2 bg-gray-200 rounded">
        {children}
      </div>
    </div>
  );
}
