"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GripVertical } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import br from "/public/flag-br.svg";
import us from "/public/flag-us.svg";

export function Header({ language }: { language: string }) {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const LanguageChange = (locale: string) => {
    startTransition(() => {
      const parts = pathname.split("/");
      parts[1] = locale;
      const newPath = parts.join("/");
      router.replace(newPath);
    });
  };

  return (
    <header className="flex justify-center items-center fixed top-0 right-0 p-3 gap-4 z-10">
      <Select value={language} defaultValue="en" onValueChange={LanguageChange}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">
            <div className="flex justify-center items-center gap-2">
              <Image className="size-5" src={us} alt="US" />
              US
            </div>
          </SelectItem>
          <SelectItem value="pt">
            <div className="flex justify-center items-center gap-2">
              <Image className="size-5" src={br} alt="US" />
              BR
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      <GripVertical className="size-10 rounded-md text-primary hover:bg-primary/10 p-2 cursor-pointer" />
    </header>
  );
}
