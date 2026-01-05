"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ShoppingCart, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.98)"])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl" : "py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl font-black tracking-tighter text-[#15803D] flex items-center gap-1">
            NUTRI <span className="text-[#0A2E2A]">LUXE</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-base font-bold text-[#0A2E2A]">
          <Link href="#menu" className="hover:text-[#15803D] transition-colors relative group">
            Special Offers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#15803D] transition-all group-hover:w-full" />
          </Link>
          <Link href="#menu" className="hover:text-[#15803D] transition-colors relative group">
            Our Menu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#15803D] transition-all group-hover:w-full" />
          </Link>
          <Link href="#contact" className="hover:text-[#15803D] transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#15803D] transition-all group-hover:w-full" />
          </Link>
          <Link href="#" className="hover:text-[#15803D] transition-colors relative group">
            Track Food
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#15803D] transition-all group-hover:w-full" />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-[#F9FAFB] border border-[#E5E7EB] rounded-full px-6 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-[#15803D]/20 transition-all">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none focus:outline-none text-sm font-medium w-32"
            />
          </div>
          <div className="relative group cursor-pointer">
            <div className="w-12 h-12 bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
              <ShoppingCart className="w-5 h-5 text-[#0A2E2A]" />
            </div>
            <span className="absolute -top-1 -right-1 bg-[#15803D] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white shadow-sm">
              3
            </span>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-[#0A2E2A]">
            <Menu className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
