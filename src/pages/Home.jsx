import { useState } from "react";
import Clients from "../components/Clients";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import logo from "../assets/prime__2_-removebg-preview.png";
import bg from "../assets/background.jpg";
import bg2 from "../assets/background4.jpg";
import bg3 from "../assets/background3.jpg";
import tiktik from '../assets/tiktok-icon-white-1-logo-svgrepo-com.svg'
import grow from '../assets/grow-growth-hand-svgrepo-com.svg'
import grow2 from '../assets/finance-markting-money-coin-dollar-molecule-svgrepo-com.svg'

import Swiper from '../Swiper'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

import { FaWhatsappSquare, FaBars, FaTimes, FaTiktok, FaGoogle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaMeta } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import "../App.css";
import InfiniteSection from "../components/InfiniteSection";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const stats = [
    { number: 20, suffix: 'M', label: '12 Month Revenue Generated' },
    { number: 10, suffix: 'X', label: 'Average client ROAS' },
    { number: 39, suffix: '%', label: 'Average increase in sales' },
    { number: 32, suffix: '%', label: 'Average decrease in CPA' },
  ];

  return (
    <div>
      {/* === HEADER HERO SECTION === */}
      <motion.header
        className="min-h-screen w-full bg-cover bg-center "
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* NAVBAR */}
        <section className="rounded-full lg:px-20 sm:px-10 md:px-20 py-5">
          <motion.div
            className="text-white flex justify-between items-center px-20 sm:px-10 py-2 rounded-full backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
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
              <img src={logo} alt="logo" className="w-[120px]" />
            </motion.div>

            {/* Desktop Links */}
            <motion.div
              className="hidden md:flex space-x-6 items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#Home" className="hover:underline">
                Home
              </a>
              <a href="#Results" className="hover:underline">
                Results
              </a>
              <a href="#Testimonials" className="hover:underline">
                Testimonials
              </a>
              <a href="#contact">
                <button className="px-6 py-3 backdrop-blur-md cursor-pointer bg-white/10 text-white rounded-xl shadow-md hover:bg-white/20 transition-all duration-300">
                  Start Scaling
                </button>
              </a>
            </motion.div>

            {/* Hamburger Button */}
            <div className="md:hidden z-50">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </motion.div>
        </section>

        {/* === Animated Mobile Menu === */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-black/90 backdrop-blur-xl text-white flex flex-col p-6 pt-16 z-[100] shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-5 text-2xl text-white hover:text-pink-400"
              >
                <FaTimes />
              </button>

              <img src={logo} alt="Logo" className="w-32 mb-6" />

              <a
                href="#Home"
                onClick={() => setMenuOpen(false)}
                className="text-lg py-2 border-b border-white/10 hover:underline"
              >
                Home
              </a>
              <a
                href="#Results"
                onClick={() => setMenuOpen(false)}
                className="text-lg py-2 border-b border-white/10 hover:underline"
              >
                Results
              </a>
              <a
                href="#Testimonials"
                onClick={() => setMenuOpen(false)}
                className="text-lg py-2 border-b border-white/10 hover:underline"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-lg py-2 hover:underline"
              >
                Start Scaling
              </a>

              <div className="pt-6 border-t border-white/10 mt-6">
                <p className="text-xs text-gray-400">© Prime.M Agency 2025</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


       {/* Social Media Buttons */}
<div className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-3 text-white">
  <a
    href="https://api.whatsapp.com/send/?phone=%2B201009089502&text&type=phone_number&app_absent=0&wame_ctl=1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp className="text-3xl text-green-500 hover:scale-110 transition-transform" />
  </a>
  <a
    href="https://www.facebook.com/share/1D3uMDqRhU/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook className="text-3xl text-blue-600 hover:scale-110 transition-transform" />
  </a>
  <a
    href="https://www.instagram.com/prime.m.agency/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="text-3xl text-pink-500 hover:scale-110 transition-transform" />
  </a>
</div>

        {/* HERO TEXT */}
     <motion.section
  id="home"
  className="w-full text-white flex justify-center items-center text-center sm:py-10 md:py-12 lg:py-10"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1 }}
>
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 1.1 }}
    className="w-full max-w-7xl px-4 sm:px-10"
  >
    <motion.h1
      className="text-4xl sm:text-5xl lg:text-7xl"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      We Help E-commerce Brands & Businesses Scale their Revenue.
    </motion.h1>

    {/* Paragraphs */}
    <div className=" lg:justify-between  gap-6 mt-10 text-left hidden sm:flex">
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-5"
      >
        Prime Media Buying is the go-to performance <br />
        marketing agency dedicated to helping <br />
        passionate brands profitably scale.
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        By incorporating proven strategies designed for <br />
        profitability, we have the tools needed for <br />
        consistent growth. Likes and comments are <br />
        nothing without a strategy that focuses on what <br />
        really matters.
      </motion.p>
    </div>

    {/* Ads Cards */}
    <div className="flex flex-col gap-10 mt-10">
  <div className="grid grid-cols-3 gap-6 text-white">
    {[
      { label: 'Meta ADS', icon: <FaMeta className="text-5xl text-blue-600" /> },
      {
        label: 'TikTok ADS',
        icon: (
          <img
            src={tiktik}
            alt="TikTok"
            className="w-12"
          />
        ),
      },
      { label: 'Google ADS', icon: <FcGoogle className="text-5xl" /> },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between px-6 py-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 * index }}
      >
        <p className="text-lg sm:text-xl mb-2 sm:mb-0">{item.label}</p>
        {item.icon}
      </motion.div>
    ))}
  </div>

      {/* Audience and Marketing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {
            text: 'Analyze and Grow Your Audience',
            img: grow,
          },
          {
            text: 'Create multichannel marketing',
            img: grow2,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between px-6 py-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            <p className="text-lg">{item.text}</p>
            <img src={item.img} alt={item.text} className="w-12" />
          </motion.div>
        ))}
      </div>

      {/* Stats */}
     <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 ">
  {stats.map((stat, index) => {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
      <motion.div
        key={index}
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 * index }}
        className="min-w-[100px] "
      >
        <h1 className="text-4xl font-bold ">
          {inView && (
            <CountUp
              end={stat.number}
              duration={2}
              suffix={stat.suffix}
              enableScrollSpy
            />
          )}
        </h1>
        <p className="mt-10 text-sm sm:text-base">{stat.label}</p>
      </motion.div>
    );
  })}
</div>

    </div>
  </motion.div>
</motion.section>



      </motion.header>
      

      {/* === ABOUT SECTION === */}
      <section
        id="Results"
        className="min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <InfiniteSection/>
        <Clients/>
      </section>

      {/* === SERVICES SECTION === */}
     <section id="Testimonials">
 <Swiper/>
     </section>
      
      

      {/* === CONTACT SECTION === */}
      <section id="contact" className="min-h-screen  text-white">
        <Contact />
      </section>

      {/* === FOOTER SECTION === */}
      <footer>
        <Footer />
      </footer>
      <div className="bg-black text-white">
        <p className="flex justify-center">
          DEVELOPED BY{" "}
          <a
            className="text-[#4b52f2]"
            href="https://www.facebook.com/albarraa.alharam/ "
          >
            {" "}
            ALBARRAAMOHAMED
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
