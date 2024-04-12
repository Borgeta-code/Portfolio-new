import { TechCard } from "@/components/tech-card";
import { Work } from "@/types/work";
import { works } from "@/utils/works";
import { ArrowLeft, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function WorkDetails({ params }: { params: { id: string } }) {
  const t = useTranslations("work-section");
  const array = works(t);

  const work = array.find((work: Work) => work.id === params.id);
  return (
    <main className="min-h-screen flex flex-col justify-center items-center blue-stripe-sm">
      <Link
        className="absolute left-4 md:left-12 top-1/2 rounded-xl hover:bg-zinc-100/10 p-2 cursor-pointer"
        href={"/"}
      >
        <ArrowLeft className="text-white size-6 md:size-8" />
      </Link>

      <div className="flex flex-col gap-4 p-4">
        <h1 className="flex text-zinc-500 text-4xl font-medium gap-2">
          {work?.name}
        </h1>
        <div className="h-0.5 w-full rounded-full bg-zinc-200" />
        <h1 className="text-primary text-xl font-medium">{work?.role}</h1>
        <div className="flex items-center gap-2">
          <p className="text-zinc-400 text-base">
            {work?.startDate} - {work?.endDate}
          </p>
          <Calendar className="size-5 text-zinc-300" />
        </div>
        <p className="text-zinc-500 text-base max-w-6xl">{work?.description}</p>
        <div className="flex items-center gap-12 mt-6">
          {work?.technologies?.map((tech, index) => (
            <TechCard key={index} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </div>
    </main>
  );
}
