'use client'

import { motion } from 'framer-motion'

interface QuoteBlockProps {
  quote: string
  author?: string
}

export default function QuoteBlock({ quote, author }: QuoteBlockProps) {
  return (
    <motion.section 
      className="py-16 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6 text-center">
        <blockquote className="mx-auto max-w-4xl">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
          {author && (
            <footer className="mt-8">
              <cite className="not-italic text-lg font-medium text-black">
                — {author}
              </cite>
            </footer>
          )}
        </blockquote>
      </div>
    </motion.section>
  )
}