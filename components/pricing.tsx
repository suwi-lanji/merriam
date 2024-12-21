'use client'
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Pricing() {
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
    <section className="py-24 bg-gray-50" id='pricing' ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-xl scale-105'
                  : 'bg-white border border-gray-100'
              }`}
              variants={itemVariants}
            >
              <div className="mb-8">
                <h3 className={`font-semibold text-xl mb-2 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className={plan.featured ? 'text-blue-100' : 'text-gray-600'}>/month</span>
                </div>
                <p className={plan.featured ? 'text-blue-100' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.featured ? 'text-blue-200' : 'text-blue-600'}`} />
                    <span className={plan.featured ? 'text-blue-100' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.featured
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get started
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for personal use",
    features: [
      "5 GB Storage",
      "Basic sharing",
      "Basic security",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "29",
    description: "Ideal for professionals",
    featured: true,
    features: [
      "Unlimited Storage",
      "Advanced sharing",
      "Enhanced security",
      "Priority support",
      "Team collaboration"
    ]
  },
  {
    name: "Enterprise",
    price: "99",
    description: "For large organizations",
    features: [
      "Unlimited Storage",
      "Advanced sharing",
      "Enterprise security",
      "24/7 support",
      "Custom solutions"
    ]
  }
]

