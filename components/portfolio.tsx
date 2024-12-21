'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Portfolio() {
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
    <section className="py-24 bg-gray-50" id='portfolio' ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our cloud solutions have transformed businesses across various industries.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                
                className="w-full h-auto aspect-video"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read case study →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const portfolioItems = [
  {
    title: "ERP System",
    description: "Scalable cloud solution for ZRA-Compliant inventory management with high customizability.",
    image: "/supply_catena.png",
    link: "#"
  },
  {
    title: "Multi-Tenant Real Estate Management",
    description: "High-performance cloud solution streamlining property management, customer relations management, and marketing.",
    image: "/estate_mgmnt.png",
    link: "#"
  },
]

