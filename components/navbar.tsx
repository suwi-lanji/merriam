'use client'
import { useState } from 'react'
import Link from "next/link"
import { Cloud, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="mx-4 my-4">
        <div className="backdrop-blur-md bg-white/10 rounded-full border border-white/20 shadow-lg">
          <div className="container mx-auto">
            <div className="flex h-16 items-center justify-between px-4 space-x-10">
              <Link href="/" className="flex items-center space-x-2 text-white">
                <motion.div 
                  className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Cloud className="h-6 w-6" />
                </motion.div>
                <span className="text-xl font-semibold ">Merriam</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-8 justify-end">
              
              <NavLink href="#features">Services</NavLink>
              <NavLink href="#portfolio">Portfolio</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#socials">Connect</NavLink>
              <NavLink href="#contact">Contact</NavLink>
                <Button variant="secondary" className="rounded-full text-sm lg:text-base bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm">
                  Get started
                </Button>
              </div>

              {/* Mobile Navigation Button */}
              <Button variant="ghost" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-4 right-4 bg-blue-600/20 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden"
          >
            <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
              <NavLink href="/" mobile>Home</NavLink>
              <NavLink href="#products" mobile>Products</NavLink>
              <NavLink href="#portfolio" mobile>Portfolio</NavLink>
              <NavLink href="#pricing" mobile>Pricing</NavLink>
              <NavLink href="#socials" mobile>Connect with us</NavLink>
              <NavLink href="#contact" mobile>Contact</NavLink>
              <Button variant="secondary" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm w-full rounded-full">
                Get started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`text-sm lg:text-base text-white/90 hover:text-white transition-colors ${mobile ? 'text-lg' : ''}`}
    >
      <motion.span
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {children}
      </motion.span>
    </Link>
  )
}

