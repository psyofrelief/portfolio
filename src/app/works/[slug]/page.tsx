import WorkClient from "@/components/client/workClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FARIEDIDRIS - WORK",
  description: "View a specific project in my collection.",
};

export default function Work() {
  return <WorkClient />;
}
