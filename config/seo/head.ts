import { truncateDescription, truncateTitle } from "@/lib/seo";
import type { HeadType } from "@/types";

const HEAD: HeadType[] = [
  {
    page: "Home",
    title: truncateTitle("Stop Buying Domain You Stupid | stopbuydomain.com"),
    description: truncateDescription(
      "Reminding you how much money you waste on domains you never use. Check your receipts and stop buying domains you stupid."
    ),
    slug: "/",
  },
];

export default HEAD;
