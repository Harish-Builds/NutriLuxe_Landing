"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Play, Star, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const rotate = useTransform(scrollY, [0, 500], [0, 30])

  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-white">
      {/* Background decoration elements from image */}
      <div className="absolute top-[10%] left-[5%] w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-[60%] left-[50%] w-3 h-3 bg-[#15803D] rounded-full opacity-40" />
      <div className="absolute bottom-[20%] right-[10%] w-6 h-6 bg-red-500 rounded-full opacity-20" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-3 bg-[#FEF9C3] px-5 py-2.5 rounded-full mb-8 shadow-sm">
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full animate-ping" />
              <span className="text-sm font-black text-[#0A2E2A] uppercase tracking-[0.1em]">Happy Healthy Eating</span>
            </div>

            <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.95] mb-8 text-[#0A2E2A] tracking-tighter">
              Kick the Diet, <br />
              Embrace <span className="text-[#FBBF24]">Healthy</span> Food
            </h1>

            <p className="text-xl md:text-2xl text-[#6B7280] mb-12 max-w-xl mx-auto lg:mx-0 leading-tight font-medium">
              Hot Tasty Food Will Reach You In 60 Minutes. Who Needs A Diet When You Can Enjoy Tasty, Nutritious Meals?
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#EA580C] hover:bg-[#C2410C] text-white rounded-full px-12 h-20 text-xl font-black shadow-2xl shadow-orange-500/30 transition-all active:scale-95"
              >
                ORDER NOW
              </Button>
              <button className="flex items-center gap-4 group transition-all active:scale-95">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:bg-gray-50 border border-gray-100 transition-colors">
                  <Play className="w-6 h-6 text-[#EA580C] fill-[#EA580C] ml-1" />
                </div>
                <span className="font-bold text-[#0A2E2A] text-lg">Watch Video</span>
              </button>
            </div>
          </motion.div>

          <div className="flex-1 relative">
            <motion.div style={{ y: y1, rotate }} className="relative z-10">
              <div className="relative w-full aspect-square max-w-[650px] mx-auto">
                {/* Large Round Dish Container - Exactly as per Image */}
                <div className="absolute inset-0 bg-[#15803D] rounded-full border-[2.5rem] border-[#15803D] shadow-[0_50px_100px_rgba(0,0,0,0.15)] overflow-hidden">
                  <Image
                    src="/luxury-healthy-food-bowl.jpg"
                    alt="Nutri Luxe Signature Bowl"
                    fill
                    className="object-cover scale-110"
                  />
                </div>

                {/* Floating Elements - Replicated from Image */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute -top-10 -right-4 bg-white p-6 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex items-center gap-4 z-20 border border-gray-50"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#FEF9C3] shadow-md">
                    <Image
                      src="/smiling-chef.jpg"
                      alt="Food Delivery Guy"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#0A2E2A]">Richard Watson</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Food Delivery Guy</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-200">
                    <Phone className="w-5 h-5 text-white fill-white" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 -left-12 bg-white p-5 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.18)] z-20 min-w-[240px] border border-gray-50"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-[1.5rem] overflow-hidden shadow-inner">
                      <Image
                        src="/healthy-bowl-of-food.jpg"
                        alt="Steaks"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-black text-[#0A2E2A]">Steaks</p>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-black text-xl">$</span>
                    <span className="text-3xl font-black text-[#0A2E2A]">7.49</span>
                  </div>
                </motion.div>

                {/* Clock icon badge from image */}
                <div className="absolute top-[10%] left-[10%] w-20 h-20 bg-[#FBBF24] rounded-full flex items-center justify-center shadow-2xl z-20 border-[6px] border-white">
                  <Clock className="w-10 h-10 text-white stroke-[3px]" />
                </div>
              </div>
            </motion.div>

            {/* Orbiting Ornaments */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-[#F3F4F6] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[145%] h-[145%] border border-[#F3F4F6] rounded-full pointer-events-none opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}
