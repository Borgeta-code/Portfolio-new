// Covers
import corre from "/public/work-svg/corre-cover.svg";
import informaker from "/public/work-svg/informaker-cover.svg";
import integrade from "/public/work-svg/integrade-cover.svg";

// Techs
import docker from "/public/tech-svg/docker.svg";
import expo from "/public/tech-svg/expo.svg";
import firebase from "/public/tech-svg/firebase.svg";
import flutter from "/public/tech-svg/flutter.svg";
import nextjs from "/public/tech-svg/nextjs.svg";
import nodejs from "/public/tech-svg/nodejs.svg";
import oracle from "/public/tech-svg/oracle.svg";
import postgres from "/public/tech-svg/postgres.svg";
import prisma from "/public/tech-svg/prisma.svg";
import react from "/public/tech-svg/react-native.svg";
import springboot from "/public/tech-svg/spring-boot.svg";
import styledComponents from "/public/tech-svg/styled-components.svg";
import tailwind from "/public/tech-svg/tailwind.svg";
import typescript from "/public/tech-svg/typescript.svg";

export const works = (t) => {
  return [
    {
      id: "corre",
      cover: corre,
      name: "Corre.",
      role: t("role-corre"),
      description: t("description-corre"),
      startDate: t("startDate-corre"),
      endDate: t("endDate-corre"),
      technologies: [
        {
          icon: expo,
          name: "Expo",
        },
        {
          icon: react,
          name: "React Native",
        },
        {
          icon: typescript,
          name: "Typescript",
        },
        {
          icon: firebase,
          name: "Firebase",
        },
        {
          icon: nextjs,
          name: "Next.js",
        },
        {
          icon: styledComponents,
          name: "Styled Components",
        },
      ],
    },
    {
      id: "integrade",
      cover: integrade,
      name: "Integrade",
      role: t("role-integrade"),
      description: t("description-integrade"),
      startDate: t("startDate-integrade"),
      endDate: t("endDate-integrade"),
      technologies: [
        {
          icon: nextjs,
          name: "Next.js",
        },
        {
          icon: tailwind,
          name: "Tailwind CSS",
        },
        {
          icon: typescript,
          name: "Typescript",
        },
        {
          icon: nodejs,
          name: "Node.js",
        },

        {
          icon: springboot,
          name: "Java Spring Boot",
        },
        {
          icon: flutter,
          name: "Flutter",
        },
        {
          icon: docker,
          name: "Docker",
        },
        {
          icon: oracle,
          name: "Oracle",
        },
      ],
    },
    {
      id: "informaker",
      cover: informaker,
      name: "Informaker",
      role: t("role-informaker"),
      description: t("description-informaker"),
      startDate: t("startDate-informaker"),
      endDate: t("endDate-informaker"),
      technologies: [
        {
          icon: react,
          name: "react",
        },
        {
          icon: typescript,
          name: "Typescript",
        },
        {
          icon: prisma,
          name: "Prisma",
        },
        {
          icon: postgres,
          name: "Postgres",
        },
      ],
    },
  ];
};
