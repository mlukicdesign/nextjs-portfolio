import React from 'react'

const HomeTech = () => {
  return (
    <div className="fluid-container radial-gradient">
      <h2 className="text-gradient ~text-3xl/6xl mb-16 text-center font-arbeit">
        Design, Code, Deliver.
        <br></br>
        Every layer counts.
      </h2>

      {/* Design Grid */}
      <div>
        <div className="flex border-b border-neutral-200 ">
          <h4 className="text-2xl font-arbeit pb-2">DESIGN</h4>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2"></div>
          <div className="w-1/2 grid grid-flow-col grid-col-2">
            <div className="border border-white border-opacity-50 bg-white/10 backdrop-blur-sm aspect-square p-8">
              <p className="text-neutral-200">
                We design with the user in mind.
              </p>
            </div>
            <div className="border border-white border-opacity-50 bg-white/10 backdrop-blur-sm aspect-square p-8">
              <p className="text-neutral-200">
                We design with the user in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTech
