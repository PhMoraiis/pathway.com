import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { BackgroundBeams } from '../ui/background-beams'

export default function Hero() {
  return (
    <section className="max-w-screen-2xl mx-auto flex items-center justify-center p-32 mt-16 relative shadow-lg rounded-3xl">
      <BackgroundBeams className="absolute inset-0 -z-10" />
      <div className="flex items-center justify-center flex-col max-w-screen-lg mx-auto pb-4 px-4 sm:px-8 space-y-8">
        <div className="text-center items-center justify-center flex flex-col space-y-8 max-w-screen-md">
          <a
            href="/"
            className="inline-flex justify-between gap-x-4 items-center rounded-md p-0.5 border text-sm font-medium duration-150 bg-background hover:bg-border/20 shadow-lg px-1"
          >
            <span className="inline-block rounded-sm px-3 py-1 bg-primary text-text">
              New!
            </span>
            <p className="flex items-center">
              Read the launch post from here
              <ArrowRight className="h-4 w-4 ml-0.5" />
            </p>
          </a>
          <h1 className="text-7xl font-coolvetica">
            The Financial Platform That Changes Your Path
          </h1>
          <p className="text-lg max-w-screen-sm">
            Movatif Regular - Gilroy Black - Lufga Black - Basique Pro - Hurme
            Geometric Sans - Sequel Sans - Europa Grotesk
          </p>
        </div>
        <div>
          <Button className="bg-foreground text-muted p-6 font-light uppercase hover:bg-primary hover:text-text shadow-sm">
            Get Started
            <ArrowRight className="h-6 w-6 ml-1" strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </section>
  )
}
