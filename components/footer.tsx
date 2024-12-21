'use client'
import Link from "next/link"
import { Cloud } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white py-12">
      <div className="relative container mx-auto px-4">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-white/20 rounded-full">
                <Cloud className="h-6 w-6" />
              </div>
              <span className="text-xl font-semibold">Merriam</span>
            </Link>
            <p className="text-blue-100">
              Revolutionizing businesses with data analysis and marketing solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <Link href={product.url} className="text-blue-100 hover:text-white text-sm transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-blue-100 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-blue-100 hover:text-white text-sm transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-blue-100 hover:text-white text-sm transition-colors">Press</Link></li>
              <li><Link href="/blog" className="text-blue-100 hover:text-white text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-blue-100 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-blue-100 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="text-blue-100 hover:text-white text-sm transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Merriam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const products = [
  { name: "Data Analysis", url: "/products/data-analysis" },
  { name: "Marketing Solutions", url: "/products/marketing-solutions" },
  { name: "Business Intelligence", url: "/products/business-intelligence" },
  { name: "AI Integration", url: "/products/ai-integration" },
  { name: "Performance Tracking", url: "/products/performance-tracking" },
]

export default Footer;

