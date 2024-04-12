"use client";

import { Work } from "@/types/work";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export function WorkCard(props: Work) {
  const router = useRouter();
  const { locale } = useParams();

  const handleClick = () => {
    router.push(`${locale}/work/${props.id}`);
  };

  return (
    <div className="min-w-60 flex flex-col overflow-hidden rounded-xl shadow-lg">
      <Image src={props.cover} draggable={false} alt="work-cover" />
      <div className="w-full flex justify-between items-center p-4 bg-white">
        <span className="font-medium text-2xl text-zinc-500">{props.name}</span>
        <ArrowRight
          onClick={handleClick}
          className="size-10 rounded-md text-primary hover:bg-primary/10 p-2 cursor-pointer"
        />
      </div>
    </div>
  );
}
