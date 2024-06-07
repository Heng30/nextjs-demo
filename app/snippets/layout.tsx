import bgImg from "@/public/snippet-create.jpg";
import Hero from "@/components/hero";
import SnippetHeader from "@/components/snippets/header";

export default function DiscussLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="absolute inset-0">
      <Hero imgData={bgImg} imgAlt="bg image" />
      <div className="w-full h-full flex flex-col gap-4">
        <SnippetHeader />
        {children}
      </div>
    </div>
  );
}
