import React, { useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [showMore, setShowMore] = useState(false)

  const handleToggle = () => {
    setShowMore(!showMore)
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 text-white bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="about"
    >
      <motion.h2
  className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text-about"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  About Prime.M Agency
</motion.h2>


      <motion.p
        className="text-base md:text-lg leading-relaxed max-w-3xl text-center text-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        At <span className="font-semibold text-white">Prime.M Agency</span>, we’re more than just media buyers — we’re growth partners. Our team crafts high-performing ad strategies across platforms like Meta, Google, and TikTok to maximize your ROI and scale your business.
      </motion.p>

      {showMore && (
        <motion.p
          className="text-base md:text-lg leading-relaxed max-w-3xl text-center text-gray-300 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          With a creative-first mindset and data-driven approach, we help brands cut through the noise and reach the right audience at the right time. Our services include content creation, full-funnel ad management, performance analytics, and market research to ensure every dollar is working for you.
        </motion.p>
      )}

     <motion.div
  className="mt-8"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  <button
    onClick={handleToggle}
    className="px-6 py-3 text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#fcacff]"
    style={{
      backgroundImage: 'linear-gradient(to right, #7357ff, #fcacff)', // fallback
      WebkitAppearance: 'none',
      WebkitTapHighlightColor: 'transparent',
    }}
  >
    {showMore ? 'Show Less' : 'Learn More'}
  </button>
</motion.div>

    </motion.div>
  )
}

export default About
