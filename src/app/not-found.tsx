import { SocialMedia } from "@/components/social-media";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="h-screen flex flex-col justify-center items-center gap-8">
        <h1 className="font-bold stroke-text text-[180px] md:text-[500px] leading-[500px] text-primary select-none">
          404
        </h1>

        <Link
          className="absolute left-4 md:left-8 top-4 md:top-1/2 rounded-xl hover:bg-zinc-100/10 p-2 cursor-pointer"
          href={"/"}
        >
          <ArrowLeft className="text-white size-6 md:size-14" />
        </Link>

        <SocialMedia />
      </body>
    </html>
  );
}
