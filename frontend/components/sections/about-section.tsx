import Image from "next/image"
import { siteConfig } from "@/constants/config"
import CustomFontText from "@/components/animations/custom-font-text"
import { getImagePath } from "@/lib/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <CustomFontText
          text="About Me"
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          interval={1500}
        />
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
              <Image
                src={getImagePath("/headshot.jpg")}
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              Hello! I'm {siteConfig.name}. I am a full-stack developer. My specific skillset is shown down below, so I am not going to repeat them here, but I want to share two things that I value the most as a developer:
              <ul>
                <li>
                  <strong>A Product Mindset</strong>: understand, knows, and believes in what they are building.
                </li>
                <li>
                  <strong>Design Good System</strong>: never settle on existing solutions, always aim for more efficient, scalable, and elegant systems.
                </li>
              </ul>
              <br />
              Well, professionally speaking, I am figuring out things, so I have a very broad range of interests right now, including Web3 development in Defi, AI agents, data engineering, search engine optimization, and a little bit of quant dev. 
            </p>
            <p className="text-lg">
              Personally, my strongest interest is literature. I think I might be a poet after I retire.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
