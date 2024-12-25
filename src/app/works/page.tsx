import WorksClient from "@/components/client/worksClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FARIEDIDRIS - WORKS",
  description:
    "View a selection of my projects, each of which reflects distinct difficulties, creative solutions, and a dedication to producing outcomes that have an impact.",
};

export default function Works() {
  return <WorksClient />;
}
