import { Button, buttonVariants } from "@/components/ui/button"
import MaxWidthWrapper from "@/components/ui/common/MaxWidthWrapper"
import { ChevronRightIcon, PlayCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { features } from "process"

const page = () => {
  return (
    <div className="overflow-hidden">
      <MaxWidthWrapper>
        <div className="py-20 md:py-28 relative text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Easy timestamps for your youtube videos.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Generate timestamps for your YouTube description in seconds. Build by creators, for creators.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/signin" className={buttonVariants({
            variant: "default",
            size: "lg",
            className: "group w-44"
          })}>
            Get Started
            <ChevronRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Link>
          <Link href="/about" className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "group w-44"
          })}>
            Learn more
          </Link>
        </div>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            [
              {
                title: "AI-powered",
                description: "Laverage the power of AI to generate timestamps for your YouTube videos.",
              },
              {
                title: "Easy to Use",
                description: "Our platform is easy to use and takes only seconds to generate timestamps for your YouTube videos.",
              },
              {
                title: "SEO boost",
                description: "Generating timestamps for your YouTube videos can help improve your SEO.",
              }
            ].map((features, index) => {
              return (
                <div
                  className="bg-secondary/50 p-6 rounded-lg hover:shadow-md transition"
                  key={index}
                >
                  <h3 className="text-lg font-semibold mb-2">{features.title}</h3>
                  <p className="text-muted-foreground">{features.description}</p>
                </div>
              )
            })
          }
          <div className="relative max-w-4xl mx-auto">
            <div className="col-span-full justify-center">
              <Button variant="outline" size={"lg"} className="bg-background/80">
                <PlayCircle className="mr-2 h-6 w-6" />
                Watch demo
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="bg-gradient-to-b from-background to-secondary/20 py-20 md:py-28">
        <MaxWidthWrapper>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Build by Mr. Kumar - Coding
            </h2>
            <p className="text-xl text-muted-foreground">
              Crafted with passion and expertise
            </p>
          </div>
          <div className="mt-10 relative max-w-3xl mx-auto">
            <Image
              src="https://wallpapers.com/images/hd/aesthetic-couple-anime-knpqm08doidy0c42.jpg"
              width={800}
              height={450}
              alt="demo image"
              className="rounded-xl shadow-xl"
            />
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default page