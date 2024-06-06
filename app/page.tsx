import Link from "next/link";
import DiscussPath from "@/components/discuss/paths";

export default function Home() {
  const linkDetails = [
    { href: "/snippets", text: "Code Snippet" },
    { href: DiscussPath.home(), text: "Discuss Forum" },
  ];

  const linkDetailsHtml = linkDetails.map((detail) => {
    return (
      <div
        key={detail.href}
        className="w-48 h-32 flex items-center rounded-xl border border-red-100 bg-white hover:bg-red-100"
      >
        <Link className="text-4xl text-center" href={detail.href}>
          {detail.text}
        </Link>
      </div>
    );
  });

  return (
    <div className="w-full">
      <div className="absolute inset-0 flex flex-warp mt-48 w-2/3 mx-auto justify-center gap-16">
        {linkDetailsHtml}
      </div>
    </div>
  );
}
