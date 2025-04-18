import Image from "next/image"
import CustomScrambleText from "./custom-scramble-text"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <CustomScrambleText
          text="About Me"
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          hoverToLoop={true}
          loopDelay={2}
        />
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Your Name"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              Hello! I'm Your Name, a passionate web developer with a keen eye for design and a love for creating
              seamless user experiences.
            </p>
            <p className="text-lg">
              With expertise in modern web technologies like React, Next.js, and Tailwind CSS, I build responsive and
              accessible websites that deliver exceptional performance.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
