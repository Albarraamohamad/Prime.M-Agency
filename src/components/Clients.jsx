import React from 'react';
import { motion } from 'framer-motion';

// ✅ Rename image filenames to remove spaces in actual files and project
import result1 from '../assets/Screenshot 2025-07-19 022127.png';
import result2 from '../assets/screenshot_2.png';
import result3 from '../assets/screenshot_3.png';
import result4 from '../assets/screenshot_4.png';
import result5 from '../assets/screenshot_5.png';
import result6 from '../assets/screenshot_6.png';

const images = [result1, result2, result3, result4, result5, result6];

const Clients = () => {
  return (
    <div className="py-10 px-4 lg:px-20 bg-black">
      <h1 className="text-4xl lg:text-6xl mb-6 text-center text-white py-10">
        Results in Action
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="w-full h-[250px] overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              src={img}
              alt={`Result ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
