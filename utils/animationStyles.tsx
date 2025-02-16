import { Variants } from 'framer-motion'
import { cubicBezier } from 'framer-motion'

const easing = cubicBezier(0, 0.55, 0.45, 1)

// Fade-in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: easing } },
}

// Slide-up animation
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } },
}

// Staggered container animation
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}
