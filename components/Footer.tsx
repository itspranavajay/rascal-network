import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-neon-blue glitch-text">
              RASCAL
            </Link>
          </div>
          <div className="flex space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://t.me/RascalNetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon-green"
                  >
                    Telegram
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Join the Rascal Network on Telegram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Rascal Network. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

