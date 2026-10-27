import type { Metadata } from "next";
import { Pianke } from "@/components/sections";

export const metadata: Metadata = {
  title: "片刻 Pianke | Wayne Wang",
  description: "把 B 站视频变成能读、能问、能回看的文字，转写在你自己的 Mac 上完成。Turn Bilibili videos into text you can read, question and play back.",
  openGraph: {
    title: "片刻 Pianke",
    description: "把 B 站视频变成能读、能问、能回看的文字。Turn Bilibili videos into text you can read, question and play back.",
    images: ["/projects/pianke-read.jpg"],
    type: "website",
  },
};

export default function PiankePage() {
  return <Pianke />;
}
