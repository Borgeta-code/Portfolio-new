import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import picture from "/public/profile-picture.png";

export function IntroductionSection({ t }: any) {
  return (
    <div className="h-screen flex justify-center items-center relative p-4 gap-6">
      <Image draggable={false} src={picture} alt="Profile-picture" />
      <div className="h-1 w-24 relative circle rounded-full bg-primary -ml-16" />
      <div className="flex flex-col gap-4">
        <h1 className="flex uppercase text-zinc-400 text-4xl font-medium gap-2">
          Matheus <span className="text-primary">Borges</span>
        </h1>
        <div className="h-0.5 w-full rounded-full bg-zinc-200" />
        <h1 className="text-primary text-2xl font-medium">{t("profession")}</h1>
        <p className="text-zinc-400 text-base max-w-[350px]">
          {t("presentation")}
        </p>
        <div className="flex gap-4 mt-4">
          <Button variant="default" size={"lg"}>
            {t("talk-to-me")}
          </Button>

          <Button variant="ghost" size={"lg"}>
            {t("resume")}
            <Download className="size-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
