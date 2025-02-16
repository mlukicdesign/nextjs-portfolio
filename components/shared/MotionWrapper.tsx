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

interface MotionTextProps {
  children: React.ReactNode
  variants?: any
  className?: string
  viewport?: { once?: boolean; amount?: number }
  transition?: any
  delay?: any
  as?: keyof JSX.IntrinsicElements // Allow flexible element types
}

export const MotionText = ({
  children,
  variants,
  className,
  delay,
  viewport = { once: true },
}: MotionTextProps) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={viewport}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
