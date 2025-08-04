  import React from 'react'
  import { motion } from 'framer-motion'
  import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaWhatsapp } from 'react-icons/fa'

  const Footer = () => {
    return (
      <motion.footer
        className="bg-[#0f0f0f] text-white py-10 px-6 md:px-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Prime.M Agency</h2>
            <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 text-xl">
            
            <a
              href="https://www.facebook.com/share/1D3uMDqRhU/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877F2] transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/prime.m.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
                href="https://api.whatsapp.com/send/?phone=%2B201009089502&text&type=phone_number&app_absent=0&wame_ctl=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className=" text-green-500 hover:scale-110 transition-transform" />
              </a>
            <a
              href="https://www.snapchat.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fffc00] transition duration-300"
            >
              <FaSnapchatGhost />
            </a>
          </div>
        </div>
      </motion.footer>
    )
  }

  export default Footer
