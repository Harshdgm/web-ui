import { SiAngular, SiNextdotjs, SiReact, SiVuedotjs } from "react-icons/si";
import type { IconType } from "react-icons";

export interface TechBadge {
  label: string;
  icon: IconType;
  link: string;
}

export const techBadges: TechBadge[] = [
  {
    label: "React 19",
    icon: SiReact,
    link: "https://react.dev/",
  },
  {
    label: "NextJS 16",
    icon: SiNextdotjs,
    link:"https://nextjs.org/docs",
  },
  {
    label: "VueJS",
    icon: SiVuedotjs,
    link:"https://vuejs.org/guide/introduction",
  },
  {
    label: "AngularJS",
    icon: SiAngular,
    link:"https://docs.angularjs.org/guide",
  },
];
