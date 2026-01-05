"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Accreditations() {
  const logos = [
    { name: "MSME", src: "/msme-logo.jpg" },
    { name: "FSSAI", src: "/fssai_logo.png" },
    { name: "Startup TN", src: "/startup-tn-logo.jpg" },
  ]

  return (
    <section className="py-12 bg-white/50 border-y border-primary/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Recognized & Accredited By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-32 h-16"
            >
              <Image src={logo.src || "/placeholder.svg"} alt={logo.name} fill className="object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
