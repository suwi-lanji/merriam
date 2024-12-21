'use client'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'

export function SocialMedia() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white" ref={ref} id="socials">
      <div className="relative container px-4 mx-auto">
      <div className="absolute inset-0 overflow-hidden w-full h-full">
          <div className="absolute w-full h-full">
          
          {[...Array(20)].map((_, i) => {
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect with us
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Stay updated with our latest news, features, and special offers by following us on social media.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const socialLinks = [
  { url: "https://twitter.com/Merriam", icon: <Twitter className="w-6 h-6" /> },
  { url: "https://facebook.com/Merriam", icon: <Facebook className="w-6 h-6" /> },
  { url: "https://instagram.com/Merriam", icon: <Instagram className="w-6 h-6" /> },
  { url: "https://linkedin.com/company/Merriam", icon: <Linkedin className="w-6 h-6" /> },
]

