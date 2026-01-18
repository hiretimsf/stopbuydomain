import { XCircle, Code, Rocket, type LucideIcon } from "lucide-react";

export const DOMAIN_GRAVEYARD = [
  "myawesomeapp.io",
  "nextbigunicorn.com",
  "definitely-building-this.dev",
  "revolutionary-saas.app",
  "gonna-be-huge.co",
  "this-one-is-the-one.io",
  "million-dollar-idea.com",
  "launching-soon-promise.dev",
] as const;

export type Stat = {
  value: string;
  label: string;
  emoji: string;
  color: string;
};

export const STATS: Stat[] = [
  { value: "73%", label: "of domains never get used", emoji: "👻", color: "text-blue-500" },
  { value: "$12B", label: "spent on unused domains yearly", emoji: "💸", color: "text-green-500" },
  { value: "∞", label: "excuses made to buy 'just one more'", emoji: "🙄", color: "text-purple-500" },
];

export type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

export const STEPS: Step[] = [
  {
    icon: XCircle,
    title: "Stop",
    description:
      "Close GoDaddy. Step away from Namecheap. Put down the credit card.",
    color: "text-red-500",
  },
  {
    icon: Code,
    title: "Build",
    description: "Open your IDE. Write code. Ship something. Anything.",
    color: "text-blue-500",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Deploy on Vercel. Share on Twitter. Feel the dopamine of shipping.",
    color: "text-green-500",
  },
];
