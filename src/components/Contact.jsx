import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [done, setDone] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_a40zpym',        // ✅ Your EmailJS Service ID
        'template_t0cx9t9',       // ✅ Your EmailJS Template ID
        form.current,
        'XDvD1cvE9tabSBXqu'   // ✅ Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('✅ SUCCESS:', result.text)
          setDone(true)
          setError(false)
          form.current.reset()
        },
        (err) => {
          console.error('❌ ERROR:', err.text)
          setError(true)
        }
      )
  }

  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-[#0f0f0f] text-white px-6 py-20 md:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#7357ff] to-[#fcacff]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Contact Us
      </motion.h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md p-6 rounded-2xl space-y-6"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-white/10 text-white outline-none"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-white/10 text-white outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="w-full p-3 rounded-lg bg-white/10 text-white outline-none"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-gradient-to-r from-[#7357ff] to-[#fcacff] hover:opacity-90 transition-all duration-300 font-semibold"
        >
          Send Message
        </button>

        {done && (
          <p className="text-green-400 text-center font-semibold mt-3">
            ✅ Your message has been sent!
          </p>
        )}

        {error && (
          <p className="text-red-400 text-center font-semibold mt-3">
            ❌ Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </motion.section>
  )
}

export default Contact
