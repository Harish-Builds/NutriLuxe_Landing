"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send } from "lucide-react"

export function ContactSection() {
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsPending(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to send")
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Ready to experience <br />
              <span className="italic text-accent">luxury health?</span>
            </h2>
            <p className="text-primary-foreground/70 mb-12 max-w-md text-lg leading-relaxed">
              Have questions about our meal plans or corporate catering? Our nutrition experts are here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-accent uppercase">Email Us</p>
                  <p className="text-lg">info@nutriluxe.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-12 text-primary shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider">First Name</label>
                  <Input
                    name="firstName"
                    placeholder="John"
                    required
                    className="bg-muted/50 border-transparent h-12 rounded-xl focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider">Last Name</label>
                  <Input
                    name="lastName"
                    placeholder="Doe"
                    required
                    className="bg-muted/50 border-transparent h-12 rounded-xl focus:bg-white transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider">Email Address</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-muted/50 border-transparent h-12 rounded-xl focus:bg-white transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider">Message</label>
                <Textarea
                  name="message"
                  placeholder="How can we help you?"
                  required
                  className="bg-muted/50 border-transparent min-h-[120px] rounded-xl focus:bg-white transition-all resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold text-lg"
              >
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
