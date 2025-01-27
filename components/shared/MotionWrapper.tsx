'use client'
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  variants: Variants
  className?: string
  delay?: any
  viewport?: boolean
}

export const MotionWrapper = ({
  children,
  variants,
  className,
  viewport,
  delay,
}: MotionWrapperProps) => {
  return (
    <motion.div
      variants={variants}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
