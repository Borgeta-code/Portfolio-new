"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function SocialMedia() {
  return (
    <div className="flex items-center justify-center fixed bottom-0 right-0 p-3 gap-2 z-10">
      <Link
        className="rounded-md hover:bg-primary/10 p-2 cursor-pointer"
        href={"https://linkedin.com/in/matheus-borges-coder"}
        target="_blank"
      >
        <Linkedin className="size-6.5 text-primary" />
      </Link>
      <Link
        className="rounded-md hover:bg-primary/10 p-2 cursor-pointer"
        href={"https://github.com/Borgeta-code"}
        target="_blank"
      >
        <Github className="size-6.5 text-primary" />
      </Link>
    </div>
  );
}
