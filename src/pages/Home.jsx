import { useState } from 'react'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import logo from '../assets/prime__2_-removebg-preview.png'
import bg from '../assets/background.jpg'
import bg2 from '../assets/background2.jpg'
import bg3 from '../assets/background3.jpg'
import { FaWhatsappSquare, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

import '../App.css'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      {/* === HEADER HERO SECTION === */}
      <motion.header
        className="min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* NAVBAR */}
        <motion.div
          className='text-white flex justify-between items-center py-5 px-5 relative z-50'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img src={logo} alt="logo" className='w-[180px]' />
          </motion.div>

          {/* Desktop Links */}
          <motion.div
            className='hidden md:flex space-x-6'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#home" className='hover:underline'>Home</a>
            <a href="#about" className='hover:underline'>About Us</a>
            <a href="#services" className='hover:underline'>Services</a>
          </motion.div>

          {/* Contact Us Button */}
          <motion.div
            className='hidden md:block'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a href="#contact">
              <button className="px-6 py-3 backdrop-blur-md cursor-pointer bg-white/10 text-white rounded-xl shadow-md hover:bg-white/20 transition-all duration-300">
                Contact Us
              </button>
            </a>
          </motion.div>

          {/* Hamburger */}
          <div className="md:hidden z-50">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </motion.div>

        {/* === Animated Mobile Menu === */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-black/90 backdrop-blur-xl text-white flex flex-col p-6 pt-16 z-[100] shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-5 text-2xl text-white hover:text-pink-400"
              >
                <FaTimes />
              </button>

              <img src={logo} alt="Logo" className="w-32 mb-6" />

              <a href="#home" onClick={() => setMenuOpen(false)} className="text-lg py-2 border-b border-white/10 hover:underline">Home</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-lg py-2 border-b border-white/10 hover:underline">About Us</a>
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-lg py-2 border-b border-white/10 hover:underline">Services</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-lg py-2 hover:underline">Contact Us</a>

              <div className="pt-6 border-t border-white/10 mt-6">
                <p className="text-xs text-gray-400">© Prime.M Agency 2025</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <div className="text-white relative">
          <div className="bottom-2 right-2 fixed z-40">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B201009089502&text&type=phone_number&app_absent=0&wame_ctl=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare className="text-5xl text-green-500 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* HERO TEXT */}
        <motion.section
          id="home"
          className="w-full text-white flex justify-center items-center text-center  py-32 sm:py-48 md:py-12 lg:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.h1
              className="text-5xl  md:text-5xl lg:text-6xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              WELCOME TO
            </motion.h1>

            <motion.h1
              className="text-7xl md:text-8xl lg:text-9xl mt-4 gradient-text h1logo"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              PRIME.M
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-5xl mt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              AGENCY
            </motion.h2>

           <motion.div
  className="flex justify-center mt-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.8 }}
>
  <a href="#about">
    <button
      className="px-8 py-2 text-white font-semibold rounded-full transition-all duration-300 bg-gradient-to-r from-[#7357ff] to-[#fcacff] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#fcacff]"
      style={{
        WebkitAppearance: 'none', // Safari compatibility
        WebkitTapHighlightColor: 'transparent', // Optional smoother UX
        backgroundImage: 'linear-gradient(to right, #7357ff, #fcacff)', // Fallback for older Safari
      }}
    >
      EXPLORE
    </button>
  </a>
</motion.div>

          </motion.div>
        </motion.section>



        {/* FOOTER OF HERO */}
        <motion.div
          className='flex flex-col md:flex-row justify-between text-white text-center mt-10 px-5'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div>www.prime.m.agency.com</div>
          <div>
            <a href="mailto:albarraamohamad@gmail.com">albarraamohamad@gmail.com</a>
          </div>
        </motion.div>
      </motion.header>

      {/* === ABOUT SECTION === */}
      <section
        id="about"
        className="min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <About />
      </section>

      {/* === SERVICES SECTION === */}
      <section id="services" className="min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg3})` }}>
        <Services />
      </section>

      {/* === CONTACT SECTION === */}
      <section id="contact" className="min-h-screen bg-gray-900 text-white">
        <Contact />
      </section>

      {/* === FOOTER SECTION === */}
      <footer>
        <Footer />
      </footer>
      <div className='bg-black text-white'>
        <p className='flex justify-center'>DEVELOPED BY  <a className='text-[#4b52f2]' href="https://www.facebook.com/albarraa.alharam/ "> ALBARRAAMOHAMED</a></p>
      </div>
    </div>
  )
}

export default Home
