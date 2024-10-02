import MobileSidebar from './mobile-sidebar'
import DesktopSidebar from './desktop-sidebar'
import Dashboard from '../dashboard'

export default function Sidebar() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DesktopSidebar />
      <div className="flex flex-col">
        <MobileSidebar />
      </div>
    </div>
  )
}
