import Link from 'next/link';
import bgImg from '@/public/home.jpg';
import Hero from '@/components/hero';

export default function Home() {
    const linkDetails = [
        { "href": "/snippets", "text": "Code Snippet" },
        { "href": "/discuss", "text": "Discuss Forum" },
    ];

    const linkDetailsHtml = linkDetails.map((detail) => {
        return (
            <div className="w-48 h-32 flex items-center rounded-xl border border-red-400 bg-red-200 hover:bg-red-300">
                <Link className="text-4xl text-center" href={detail.href}>{detail.text}</Link>
            </div>
        );
    });

    return (
        <div className="w-full">
            <Hero imgData={bgImg} imgAlt="home"></Hero>
            <div className="absolute inset-0 flex flex-warp mt-48 w-2/3 mx-auto justify-center gap-16">
                {linkDetailsHtml}
            </div>
        </div>
    );
}