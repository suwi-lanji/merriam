'use client'
import { Shield, Cloud, Zap, Users, Target, Rocket, HandCoins, RefreshCcw, Handshake } from 'lucide-react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Features() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="py-24 bg-white" ref={ref} id='features'>
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Why choose Merriam?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creating solutions that empower your business to thrive in a competitive world
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50/50 shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: <Target className="w-6 h-6 text-blue-600" />,
    title: "Tailored Solutions",
    description: " We understand that no two businesses are the same. That’s why we deliver personalized and localized digital solutions that align perfectly with your unique goals and challenges."
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-600" />,
    title: "Cutting Edge Technology",
    description: "Our expertise lies in leveraging the latest technologies to develop innovative systems like ERP, CRM, and inventory management. With Merriam, you stay ahead of the curve."
  },
  {
    icon: <HandCoins className="w-6 h-6 text-blue-600" />,
    title: "Affordable Excellence",
    description: "We believe that quality doesn’t have to come with a hefty price tag. Merriam offers cost-effective solutions without compromising on performance or functionality."
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-blue-600" />,
    title: "End-to-End Service",
    description: "From software development to web design and digital marketing, we provide a complete suite of services to streamline operations, improve efficiency, and boost your online presence."
  },
  {
    icon: <Handshake className="w-6 h-6 text-blue-600" />,
    title: "Customer-Centric Approach",
    description: "Your success is our priority. We focus on building long-term relationships by delivering solutions that enhance customer experiences and drive growth."
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Trusted Partner",
    description: "Merriam is more than just a service provider – we’re your partner in innovation. Our commitment to quality, reliability, and continuous improvement sets us apart."
  }
]

