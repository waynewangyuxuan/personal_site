import { getAllWritings } from "@/lib/writings";
import { WritingsList } from "./WritingsList";

export default function WritingsPage() {
  const writings = getAllWritings();
  return <WritingsList writings={writings} />;
}
