import { Technologies } from "@/types/work";
import Image from "next/image";

export function TechCard(props: Technologies) {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Image src={props.icon} draggable={false} alt="tech-icon" />
      <span className="text-lg text-zinc-500">{props.name}</span>
    </div>
  );
}
