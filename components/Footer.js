import React from 'react'

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden space-y-8 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
              <a href="#top" className="text-base leading-6 text-gray-500 hover:text-gray-900">Home</a>
          </div>
          <div className="px-5 py-2">
              <a href="#digitalmarketing" className="text-base leading-6 text-gray-500 hover:text-gray-900">Digital marketing</a>
          </div>
          <div className="px-5 py-2">
            <a href="#webdevelopment" className="text-base leading-6 text-gray-500 hover:text-gray-900">Web development</a>
          </div>
          <div className="px-5 py-2">
            <a href="#philosophy" className="text-base leading-6 text-gray-500 hover:text-gray-900">philosophy</a>
          </div>
          <div className="px-5 py-2">
            <a href="#team" className="text-base leading-6 text-gray-500 hover:text-gray-900">Team</a>
          </div>
        </nav>
        <p className="mt-4 text-center text-base  text-gray-700 "> 
        <span className="bg-gray-100 py-2 px-8 rounded"> Call us on +32 2 896 38 01 </span>
          </p>
        <p className="mt-4 text-center text-base leading-6 text-gray-400">
          &copy; 2022 IWY Analytics – Uniq Concept 
        </p>
        <p className='text-xs text-center text-gray-500'>
        Avenue Des Gloires Nationales 29 | 1083 Ganshoren | Numéro d’entreprise : 0732.593.092 +32491592605 | +32483704882 | Direction@hdigitalmc.com | Numéro de TVA : BE0732593092 
        </p>
      </div>
    </footer>
  )
}

export default Footer