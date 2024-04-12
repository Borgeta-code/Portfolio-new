import { EducationSection } from "@/components/sections/education-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { WorkSection } from "@/components/sections/work-section";
import { useTranslations } from "next-intl";

export default function Home() {
  const introduction = useTranslations("introduction-section");
  const work = useTranslations("work-section");
  const education = useTranslations("education-section");

  return (
    <main className="min-h-screen flex flex-col justify-center items-center blue-stripe">
      <IntroductionSection t={introduction} />
      <WorkSection t={work} />
      <EducationSection t={education} />
    </main>
  );
}
