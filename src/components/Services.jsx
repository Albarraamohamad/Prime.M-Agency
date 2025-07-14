import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTiktok, FaSnapchatGhost, FaLinkedinIn, FaGoogle, FaYoutube } from 'react-icons/fa'

const services = [
  {
    title: 'Meta Ads',
    icon: <FaFacebookF size={30} />,
    description: 'Targeted campaigns across Facebook & Instagram to drive results.',
  },
  {
    title: 'TikTok Ads',
    icon: <FaTiktok size={30} />,
    description: 'Engage Gen Z with viral ad creatives on TikTok.',
  },
  {
    title: 'Snapchat Ads',
    icon: <FaSnapchatGhost size={30} />,
    description: 'Boost visibility with immersive Snapchat ad formats.',
  },
  {
    title: 'LinkedIn Ads',
    icon: <FaLinkedinIn size={30} />,
    description: 'Reach professionals & B2B clients with precise LinkedIn targeting.',
  },
  {
    title: 'Google Ads',
    icon: <FaGoogle size={30} />,
    description: 'Maximize visibility with Google search & display ads.',
  },
  {
    title: 'YouTube Ads',
    icon: <FaYoutube size={30} />,
    description: 'Tell your brand story through powerful video ads on YouTube.',
  },
]

const Services = () => {
  return (
    <motion.section
      className="min-h-screen  text-white px-6 py-20 md:px-20"
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7357ff] to-[#fcacff] mb-4">
          Our Services
        </h2>
        <div className="h-[4px] w-[80px] mx-auto mb-6 bg-gradient-to-r from-[#7357ff] to-[#fcacff] rounded-full"></div>
        <p className="text-gray-300 text-lg">
          We provide full-funnel media buying services to help your brand grow across the most effective platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/5 p-6 rounded-2xl text-center backdrop-blur-md hover:scale-105 hover:bg-white/10 transition-all duration-300 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4 text-[#fcacff]">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Services
