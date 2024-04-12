import { works } from "@/utils/works";
import { WorkCard } from "../work-card";

export function WorkSection({ t }: any) {
  const array = works(t);

  return (
    <div className="h-screen w-full flex justify-center items-center relative p-4 gap-16">
      <h1 className="text-5xl text-white font-medium absolute bottom-4 left-8">
        {t("title")}
      </h1>

      {array.map((work) => (
        <WorkCard
          key={work.id}
          cover={work.cover}
          name={work.name}
          id={work.id}
        />
      ))}
    </div>
  );
}
