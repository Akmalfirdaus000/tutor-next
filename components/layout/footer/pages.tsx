import React from 'react'

const Footer = () => {
  return (
    <>
     <section className="grid grid-cols-6 gap-5 mt-10 px-16">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="bg-gradient-to-bl from-yellow-300 to-pink-300 h-24 w-44 rounded-full" />
        ))}
      </section>
      <footer className="bg-pink-400 h-14 mt-5"></footer>
    </>
  )
}

export default Footer