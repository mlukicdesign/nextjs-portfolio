import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const LoopCarousel = ({ words }: { words: string[] }) => {
  const wordListRef = useRef<HTMLDivElement>(null)
  const totalWords = words.length
  const wordHeight = 100 / totalWords // Offset as a percentage

  useEffect(() => {
    const wordList = wordListRef.current
    if (!wordList) return

    const updateEdgeWidth = () => {
      const centerWord = wordList.children[1] as HTMLElement // Second word in list (center position)
      if (!centerWord) return

      const centerWordWidth = centerWord.getBoundingClientRect().width
      const listWidth = wordList.getBoundingClientRect().width
      const percentageWidth = (centerWordWidth / listWidth) * 100
    }

    const moveWords = () => {
      gsap.to(wordList, {
        yPercent: `-=${wordHeight}`,
        duration: 1.2,
        ease: 'elastic.out(1, 0.85)',
        onStart: updateEdgeWidth,
        onComplete: () => {
          // Move the first word to the end to keep the loop continuous
          wordList.appendChild(wordList.children[0])
          gsap.set(wordList, { yPercent: 0 }) // Reset Y position for smooth transition
        },
      })
    }

    updateEdgeWidth()

    const timeline = gsap.timeline({ repeat: -1, delay: 1 })
    timeline.call(moveWords).to({}, { duration: 2 }).repeat(-1)

    return () => {
      timeline.kill() // Cleanup GSAP on unmount
    }
  }, [totalWords, wordHeight]) // Depend only on the totalWords and wordHeight

  return (
    <div className="relative overflow-hidden h-24">
      {/* Word List */}
      <div ref={wordListRef} className="flex flex-col items-center">
        {words.map((word, index) => (
          <div key={index} className="text-2xl font-bold py-2">
            {word}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoopCarousel
