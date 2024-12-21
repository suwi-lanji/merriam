'use client'
import { Button } from "@/components/ui/button"
import { Lock, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Animated Stars */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden w-full h-full">
          <div className="absolute w-full h-full">
          <div className="moon opacity-70">
          <div
                style={{
                  width: `8px`,
                  height: `10px`,
                  left: `20%`,
                  top: `70%`,
                }}
                className="absolute z-10 bg-white rounded-full twinkle star"
              />
            <div
                style={{
                  width: `10px`,
                  height: `12px`,
                  left: `70%`,
                  top: `70%`,
                }}
                className="absolute z-10 bg-white rounded-full twinkle star"
              />
            <div
                style={{
                  width: `8px`,
                  height: `10px`,
                  left: `20%`,
                  top: `70%`,
                }}
                className="absolute z-10 bg-white rounded-full twinkle star"
              />
          </div>
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 8 + 2;
            const left = Math.random() * 100;
            const top = Math.random() * 100;

            return (
              <div
                key={i}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                className="absolute bg-white rounded-full twinkle star"
              />
            );
          })}

          </div>
        </div>
      )}
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-blob" />
        <div className="absolute -right-[10%] top-[10%] w-[500px] h-[500px] bg-gradient-to-l from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-gradient-to-t from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="inline-flex items-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white mb-8 border border-white/20 shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Lock className="w-4 h-4 mr-2" />
          Data-Driven Growth
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Growth
          <br />
          <span className="bg-gradient-to-r from-white to-blue-100 text-transparent bg-clip-text">
            without limits
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Revolutionize your business with data analysis and marketing solutions
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg rounded-full">
            Get started
          </Button>
          <Button size="lg" variant="ghost" className="text-white border border-white/20 backdrop-blur-md hover:bg-white/10 rounded-full">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Modern Cloud Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            fillOpacity="0.08"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="white"
            fillOpacity="0.12"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,272C960,277,1056,267,1152,245.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  )
}

