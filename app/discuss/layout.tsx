import DiscussHeader from "@/components/discuss/header";
import { Toaster } from "react-hot-toast";

export default function DiscussLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <DiscussHeader />
      <div className="w-2/3 h-full overflow-hidden flex justify-center p-2 rounded">
        {children}
      </div>
    </div>
  );
}
