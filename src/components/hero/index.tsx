import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import AnimatedGridPattern from '../ui/animated-grid-pattern'
import { Separator } from '../ui/separator'
import Ripple from '../ui/ripple'

export default function Hero() {
  return (
    <div className="relative">
      <section className='flex items-center justify-center flex-col max-w-screen-lg mx-auto mt-16 pb-4 px-4 sm:px-8'>
        <div className='text-center items-center justify-center flex flex-col space-y-4 max-w-screen-md'>
          <h1 className='text-7xl font-coolvetica'>The Financial Platform That Changes Your Path</h1>
        <p className='text-lg max-w-screen-sm'>
          Movatif Regular - Gilroy Black - Lufga Black - Basique Pro - Hurme Geometric Sans - Sequel Sans - Europa Grotesk
        </p>
        </div>
        <div>
          <Button variant="outline" size="lg">Get Started</Button>  
        </div>
      </section>
    </div>
  )
}
