import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import AnimatedGridPattern from '../ui/animated-grid-pattern'
import { Separator } from '../ui/separator'

export default function Hero() {
  return (
    <div className="relative">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
          <div className="flex-none space-y-5 max-w-xl">
            <a
              href="/"
              className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 text-sm font-medium"
            >
              <p className="flex items-center">
                Read the launch post from here
              </p>
              <Separator decorative className='w-32'/>
            </a>
            <h1 className="text-7xl text-gray-800 font-extrabold sm:text-5xl">
              Welcome to Pathway your financial planner
            </h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex items-center gap-x-3 sm:text-sm">
              <Button variant="outline" size="lg">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            {/* Replace with your image */}
          </div>
        </div>
      </section>
    </div>
  )
}
