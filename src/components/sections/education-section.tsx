import { Calendar, GraduationCap } from "lucide-react";

export function EducationSection({ t }: any) {
  return (
    <div className="h-screen w-full flex justify-center items-center relative p-4 gap-16">
      <h1 className="text-5xl text-white font-medium absolute bottom-4 left-8">
        {t("title")}
      </h1>

      <div className="h-20 flex justify-center items-center gap-3">
        <GraduationCap strokeWidth={1.4} className="size-10 text-primary" />
        <div className="h-full w-0.5 rounded-md bg-primary" />
        <div className="flex flex-col gap-2">
          <p className="text-primary font-medium text-base">
            Análise e Desenvolvimento de Sistemas
          </p>
          <p className="text-zinc-400 text-base">
            Universidade Cruzeiro do Sul
          </p>
          <div className="flex items-center gap-2">
            <p className="text-zinc-400 text-base">Jan 2023 - Dez 2024</p>
            <Calendar className="size-5 text-zinc-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
