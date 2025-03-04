import React from 'react'
import { Trophy } from 'lucide-react'
import { motion } from 'motion/react'

const FloatingCard = () => {
  return (
    <di>
			<motion.div
				className="absolute right-64 top-36 bg-background rounded-lg shadow-lg border border-border/50 p-3 max-w-[200px]"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={delay: 0.6, duration: 0.5 }
			>
				<div className="flex items-center gap-3">
					<div className="bg-amber-100 p-2 rounded-full">
						<Trophy className="h-5 w-5 text-amber-600" />
					</div>
					<div>
						<p className="text-xs font-medium">Conquista Desbloqueada!</p>
						<p className="text-xs text-muted-foreground">Economizador Mestre</p>
					</div>
				</div>
				<div className="mt-2 bg-muted h-2 rounded-full overflow-hidden">
					<div className="bg-gradient-to-r from-amber-500 to-primary h-full w-3/4" />
				</div>
				<p className="text-xs text-right mt-1 text-muted-foreground">
					75% completo
				</p>
			</motion.div>
        </di>
  )
}

export default FloatingCard