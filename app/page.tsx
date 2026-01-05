"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Accreditations } from "@/components/accreditations"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ArrowRight, ShoppingCart, Clock, Bike } from "lucide-react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Link from "next/link"

const MENU_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "mexican", label: "Mexican" },
  { id: "italian", label: "Italian" },
  { id: "desserts", label: "Desserts" },
]

const MENU_ITEMS = [
  { name: "Gyro Sandwhic", price: "15.00", rating: "4.9", img: "gyro sandwich" },
  { name: "Chicken Chargha", price: "25.50", rating: "5.0", img: "roasted chicken" },
  { name: "Green Beans", price: "12.00", rating: "4.9", img: "green beans" },
  { name: "Chowmein", price: "18.50", rating: "5.0", img: "chowmein noodles" },
  { name: "Chicken Pot Pie", price: "25.00", rating: "4.9", img: "chicken pie" },
  { name: "Green Salad", price: "15.00", rating: "4.9", img: "fresh salad" },
]

const TESTIMONIALS = [
  {
    name: "Selena Gomz",
    age: "22 Years",
    text: "Fresh Feast has truly revolutionized my approach to eating healthy! Their diverse menu options make it easy to find something delicious and nutritious every time",
    img: "/woman-portrait.png",
  },
  {
    name: "David Ken",
    age: "24 Years",
    text: "I can't thank Fresh Feast enough for simplifying my busy lifestyle. I no longer have to sacrifice health for convenience. Highly recommend!",
    img: "/thoughtful-man-portrait.png",
  },
  {
    name: "Jennifer Sir",
    age: "21 Years",
    text: "Fresh Feast has been my go-to solution for nutritious meals without any hassle. As someone with a busy schedule, I appreciate the clarity of their menu.",
    img: "/woman-portrait.png",
  },
]

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true })

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero />

      <Accreditations />

      {/* Why Choose Us - Exactly as per Image */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <h2 className="text-5xl font-bold text-[#0A2E2A] max-w-lg leading-tight">
              Why Choose us for <br />
              Your <span className="text-[#15803D]">Healthy</span> Food
            </h2>
            <p className="text-[#6B7280] max-w-md text-lg">
              We're committed to cook healthy to ensure they retain their freshness and nutritional value, guaranteeing
              a delightful experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Healthy Cooking",
                desc: "Healthy cooking is a blend of creativity and nutrition, where vibrant ingredients",
                icon: "/cooking-icon.jpg",
                color: "bg-[#FEF9C3]",
              },
              {
                title: "#1 Healthy Cooked Food",
                desc: "Recognized as the number one ingredient for vitality and well-being for our customers",
                icon: "/rank-icon.png",
                color: "bg-[#DCFCE7]",
              },
              {
                title: "100 Top Food Brand",
                desc: "We are one of the best brands in the Food and for our beloved customers in the world",
                icon: "/trophy-icon.png",
                color: "bg-[#FFEDD5]",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-12 rounded-[3.5rem] border border-[#F3F4F6] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col"
              >
                <div
                  className={`w-24 h-24 ${feature.color} rounded-[2rem] mb-10 flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}
                >
                  <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={48} height={48} />
                </div>
                <h3 className="text-2xl font-bold mb-5 text-[#0A2E2A] leading-tight">{feature.title}</h3>
                <p className="text-[#6B7280] mb-10 leading-relaxed text-lg flex-grow">{feature.desc}</p>
                <Link
                  href="#"
                  className="flex items-center gap-2 font-bold text-[#0A2E2A] group-hover:text-[#15803D] transition-colors text-lg"
                >
                  Learn More <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items - Exactly as per Image */}
      <section id="menu" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#15803D] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Menu</span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#0A2E2A] mb-16">Most Popular Items</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-3 bg-transparent mb-20 h-auto">
              {MENU_CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-full px-10 py-4 border border-[#E5E7EB] bg-white text-[#6B7280] data-[state=active]:bg-[#15803D] data-[state=active]:text-white data-[state=active]:border-[#15803D] transition-all duration-300 font-bold text-lg shadow-sm"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {MENU_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-[3rem] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 p-5 group"
                  >
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8">
                      <Image
                        src={`/.jpg?height=500&width=700&query=${item.img} gourmet food`}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="px-3 pb-4 text-left">
                      <div className="flex justify-between items-start mb-6">
                        <h4 className="text-2xl font-bold text-[#0A2E2A] leading-tight flex-1">{item.name}</h4>
                        <div className="flex items-center gap-1.5 font-bold text-[#0A2E2A] bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <Button className="bg-[#15803D] hover:bg-[#166534] text-white rounded-full px-10 py-7 h-auto font-bold text-lg shadow-lg shadow-[#15803D]/20 transition-all active:scale-95">
                          Add To Cart
                        </Button>
                        <span className="text-2xl font-bold text-[#0A2E2A] tracking-tight">${item.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button className="mt-20 bg-[#15803D] hover:bg-[#166534] text-white rounded-full px-16 py-8 h-auto font-bold text-xl shadow-xl shadow-[#15803D]/20 transition-all active:scale-95">
                See All <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Chef Section - Exactly as per Image */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-full border-[2rem] border-[#DCFCE7] overflow-hidden aspect-square shadow-2xl">
                <Image src="/smiling-professional-chef.jpg" alt="Professional Chef" fill className="object-cover" />
              </div>
              {/* Decorative elements from image */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#15803D] rounded-full -z-0 translate-x-1/2 -translate-y-1/2 opacity-20 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 border-[1rem] border-[#FEF9C3] rounded-full -z-0 opacity-50" />
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#0A2E2A] mb-8 leading-tight">
                Always ready to <br /> serve you with <span className="text-[#15803D]">best</span>
              </h2>
              <p className="text-[#6B7280] text-lg mb-12 leading-relaxed">
                Your Doorway To Wholesome Goodness. Delight In Fresh, Nutritious Meals Delivered Right To Your Doorstep.
                Elevate Your Health With Every Bite, Hassle-Free.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFEDD5] rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-[#EA580C]" />
                  </div>
                  <span className="font-bold text-[#0A2E2A]">Online Order</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFEDD5] rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#EA580C]" />
                  </div>
                  <span className="font-bold text-[#0A2E2A]">24/7 Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How To Work - Exactly as per Image with Dashed Path */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#15803D] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">How To Work</span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#0A2E2A] mb-24">
            From <span className="text-[#15803D]">Order to Doorstep</span> in 20 Minutes
          </h2>

          <div className="relative">
            {/* Dashed Line Connection - Matching Image Path */}
            <svg
              className="hidden lg:block absolute top-[40%] left-0 w-full h-[150px] -z-0 opacity-20"
              viewBox="0 0 1200 150"
            >
              <path
                d="M 150 75 Q 350 -50 550 75 T 1050 75"
                fill="transparent"
                stroke="#15803D"
                strokeWidth="4"
                strokeDasharray="12, 12"
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative z-10">
              {[
                {
                  title: "CHOOSE",
                  desc: "Explore a diverse menu curated for your tastes and dietary needs. Select your favorites with ease and place order",
                  img: "/app-interface-on-laptop.jpg",
                  step: 1,
                },
                {
                  title: "PREPARE FOOD",
                  desc: "Our culinary artisans spring into action, crafting each dish with meticulous care and the freshest ingredients",
                  img: "/healthy-bowl-of-food.jpg",
                  step: 2,
                },
                {
                  title: "DELIVER",
                  desc: "Sit back and relax as our dedicated team orchestrates a seamless delivery experience. Ready to be savored and enjoyed!",
                  img: "/food-delivery-delivery-bag.jpg",
                  step: 3,
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white p-8 rounded-[3.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] mb-10 border border-[#F3F4F6] relative"
                  >
                    <Image
                      src={step.img || "/placeholder.svg"}
                      alt={step.title}
                      width={300}
                      height={200}
                      className="rounded-[2rem] object-cover shadow-sm"
                    />
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#15803D] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#0A2E2A] mb-5 flex items-center gap-3">
                    {step.title}{" "}
                    <span className="w-3 h-3 rounded-full bg-[#15803D] shadow-[0_0_10px_rgba(21,128,61,0.5)]" />
                  </h3>
                  <p className="text-[#6B7280] max-w-[320px] text-lg leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - With Carousel to handle 3+ items eleganty */}
      <section className="py-24 bg-[#0A2E2A] text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-[1.1]">
                What Are People <br /> Saying <span className="text-[#FBBF24]">About</span> Us
              </h2>
              <p className="text-gray-400 text-xl mb-14 leading-relaxed max-w-sm">
                We are very happy if you are satisfied with our service and products, let's read pure reviews from
                customers
              </p>
              <div className="flex items-baseline gap-3 mb-10">
                <span className="text-7xl font-bold tracking-tighter">02</span>
                <span className="text-gray-600 text-2xl font-bold">/ 05</span>
              </div>
              <div className="flex gap-5">
                <Button
                  onClick={scrollPrev}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 hover:bg-gray-800 text-white w-16 h-16 bg-transparent border-2 group transition-all"
                >
                  <ArrowRight className="w-8 h-8 rotate-180 transition-transform group-active:scale-90" />
                </Button>
                <Button
                  onClick={scrollNext}
                  className="bg-[#15803D] hover:bg-[#166534] rounded-full w-16 h-16 shadow-lg shadow-[#15803D]/20 group transition-all"
                >
                  <ArrowRight className="w-8 h-8 transition-transform group-active:scale-90" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 overflow-hidden" ref={emblaRef}>
              <div className="flex gap-8">
                {TESTIMONIALS.map((review, i) => (
                  <div key={i} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-16px)] min-w-0">
                    <div className="bg-white rounded-[3.5rem] p-12 text-gray-900 h-full shadow-2xl relative overflow-hidden group">
                      {/* Decorative quote mark */}
                      <div className="absolute top-10 right-12 text-9xl font-serif text-[#DCFCE7] leading-none select-none opacity-40">
                        "
                      </div>

                      <div className="flex items-center gap-5 mb-10 relative z-10">
                        <div className="relative w-16 h-16">
                          <Image
                            src={review.img || "/placeholder.svg"}
                            alt={review.name}
                            fill
                            className="rounded-full object-cover ring-4 ring-[#DCFCE7]"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-2xl text-[#0A2E2A]">{review.name}</h4>
                          <p className="text-gray-500 font-medium">{review.age}</p>
                        </div>
                      </div>
                      <p className="text-[#4B5563] text-xl leading-relaxed italic relative z-10 font-medium">
                        "{review.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download - Perfectly as per Image */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#DCFCE7] rounded-[5rem] overflow-hidden flex flex-col lg:flex-row items-center p-16 lg:p-28 relative shadow-sm border border-[#F3F4F6]">
            {/* Background pattern elements from image */}
            <div className="absolute top-10 right-20 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
            <div className="absolute bottom-20 left-10 w-6 h-6 bg-[#15803D] rounded-full opacity-20" />

            <div className="lg:w-1/2 z-10 text-center lg:text-left">
              <span className="text-[#15803D] font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
                Download App
              </span>
              <h2 className="text-6xl lg:text-8xl font-bold text-[#0A2E2A] mb-10 leading-[0.95] tracking-tight">
                Get Started With <br /> <span className="text-[#15803D]">Fresh Feast</span> Today!
              </h2>
              <p className="text-[#6B7280] text-2xl mb-14 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
                Discover food wherever and whenever and get your food delivered quickly.
              </p>
              <Button className="bg-[#15803D] hover:bg-[#166534] text-white rounded-full px-14 py-8 h-auto font-bold text-xl shadow-2xl shadow-[#15803D]/30 transition-all active:scale-95">
                Get The App
              </Button>
            </div>

            <div className="lg:w-1/2 relative mt-20 lg:mt-0 flex justify-center">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative w-full max-w-[550px] aspect-[4/5] drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]"
              >
                <Image src="/mobile-app-interface-dashboard.jpg" alt="App Preview" fill className="object-contain" />
              </motion.div>

              {/* Floating notification element - Replicated from image */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-[35%] left-0 lg:-left-10 bg-white p-5 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex items-center gap-5 z-20"
              >
                <div className="w-16 h-16 bg-[#FFEDD5] rounded-2xl flex items-center justify-center shadow-inner">
                  <Bike className="w-8 h-8 text-[#EA580C]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Your Food Has</p>
                  <p className="text-xl font-extrabold text-[#0A2E2A]">Arrived</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Functionality preserved */}
      <ContactSection />

      {/* Replicated Footer from Image */}
      <footer className="bg-[#F9FAFB] pt-24 pb-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1">
              <span className="text-3xl font-bold text-[#15803D] mb-8 block">NUTRI LUXE</span>
            </div>
            <div>
              <h4 className="font-bold text-[#0A2E2A] mb-8 uppercase tracking-widest text-sm">Contact</h4>
              <ul className="space-y-4 text-gray-600">
                <li>+1+86 852 826 000</li>
                <li>Info@freshfest.com</li>
                <li>1959 Pinnasalvia. Culver City, CA, 93230</li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-bold text-[#0A2E2A] mb-8 uppercase tracking-widest text-sm">Never Miss a Recipe</h4>
              <div className="flex gap-4">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white border border-gray-200 rounded-full px-8 py-4 focus:outline-none focus:ring-2 focus:ring-[#15803D]/20"
                  />
                </div>
                <Button className="bg-[#15803D] hover:bg-[#166534] text-white rounded-full px-10">Subscribe</Button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Join our subscribers and get best recipe delivered each week!
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© 2026 Designed By Hina HM</p>
            <div className="flex gap-6 text-gray-400">
              <Link href="#" className="hover:text-[#15803D] transition-colors">
                <Image src="/instagram-icon.png" alt="IG" width={20} height={20} />
              </Link>
              <Link href="#" className="hover:text-[#15803D] transition-colors">
                <Image src="/twitter-icon.png" alt="TW" width={20} height={20} />
              </Link>
              <Link href="#" className="hover:text-[#15803D] transition-colors">
                <Image src="/facebook-icon.png" alt="FB" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
