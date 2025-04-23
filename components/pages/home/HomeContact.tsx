'use client'

import React, { useState } from 'react'
import { fadeIn, slideUp } from '@/utils/animationStyles'
import SplitLines from '@/utils/SplitLineHeadings'

export default function HomeContact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setSuccess(false)

    const formData = new FormData(event.target)
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`)
      }

      setSuccess(true)
      event.target.reset()
    } catch (err) {
      console.error(err)
      alert('Error, please try resubmitting the form')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="contact-form" className="radial-gradient w-screen">
      <div className="fluid-container flex flex-col justify-center items-center mx-auto">
        <h2 className="w-full mb-8">
          <SplitLines className="max-w-[900px] text-ion-200 text-3xl md:text-5xl font-medium mb-1 pr-1 text-balance">
            Questions, musings, or feedback? I’m all ears (and emails).
          </SplitLines>
        </h2>

        <div className="w-full flex justify-end">
          <form onSubmit={handleSubmit} className="md:w-1/2 w-full">
            <div className="mb-4 flex flex-col w-500 gap-16">
              <input
                id="form-name"
                placeholder="Your Name"
                autoComplete="name"
                maxLength={50}
                name="name"
                className="font-arbeit px-2 py-2 border-b border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-100/10 focus:bg-white/5 focus:backdrop-blur-sm transition-all"
              />
              <input
                id="form-email"
                required
                placeholder="Your Email Address"
                autoComplete="email"
                maxLength={80}
                name="email"
                type="email"
                className="font-arbiet px-2 py-2 border-b border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-100/10 focus:bg-white/5 focus:backdrop-blur-sm transition-all"
              />
              <textarea
                id="form-message"
                placeholder="Type your message here..."
                required
                name="message"
                rows={5}
                className="font-arbiet px-2 py-2 border-b border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-100/10 focus:bg-white/5 focus:backdrop-blur-sm transition-all"
              />
            </div>
            <div className="flex justify-end gap-4">
              {success && (
                <p className="text-white pr-6 mt-4 text-balance font-arbeit">
                  Thank you for your submission, I will endeavour to get back to
                  you soon!
                </p>
              )}
              <button
                className="mt-8 font-arbiet px-16 py-4 rounded-lg border border-white/25 bg-transparent hover:border-ion-400/50 hover:bg-gradient-to-b from-[rgba(29,59,255,0)] to-[rgba(29,59,255,0.25)] hover:backdrop-blur-md transition flex items-center justify-center"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="loader">Flicking it through...</span>
                ) : (
                  'Send'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
