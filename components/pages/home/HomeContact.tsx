import React from 'react'

export default function HomeContact() {
  return (
    <div className="radial-gradient w-screen">
      <div className="fluid-container flex flex-col justify-center items-center ">
        <div className="w-full">
          <h2 className="md:w-1/2 w-full text-gradient ~text-2xl/4xl font-arbeit text-balance">
            Questions, musings, or feedback? I’m all ears (and emails).
          </h2>
        </div>
        <div className="w-full flex justify-end">
          <form className="md:w-1/2 w-full">
            <div className="mb-4 flex flex-col w-500 gap-16">
              <input
                id="form-name"
                placeholder="Name"
                autoComplete="name"
                maxLength={50}
                name="name"
                className="font-arbiet px-2 py-2 border-b border-white/20 bg-transparent
                focus:outline-none focus:ring-2 focus:ring-gray-100/10 focus:bg-white/5 focus:backdrop-blur-sm transition-all
                "
              />
              <input
                id="form-email"
                required
                placeholder="Email"
                autoComplete="email"
                maxLength={80}
                name="email"
                type="email"
                className="font-arbiet px-2 py-2 border-b border-white/20 bg-transparent
                focus:outline-none focus:ring-2 focus:ring-gray-100/10 focus:bg-white/5 focus:backdrop-blur-sm transition-all
                "
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
            <button
              className="mt-8 font-arbiet px-16 py-4 rounded-lg border border-white/25 bg-transparent hover:border-ion-400/50 
               hover:bg-gradient-to-b from-[rgba(29,59,255,0)] to-[rgba(29,59,255,0.25)] 
               hover:backdrop-blur-md transition"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
