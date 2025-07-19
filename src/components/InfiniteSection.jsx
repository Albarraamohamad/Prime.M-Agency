// InfiniteScrollHorizontal.jsx
import React from 'react';
import { motion } from 'framer-motion';

// ✅ عناصر قابلة للتخصيص
const items = [
  {
    title: 'DropShiping',
    color:'text-white',

  },
  {
    title: 'Branding',
    color:'text-white',

  },
  {
    title: 'Real State',
    color:'text-white',

  },
  {
    title: 'Clinics',
    color:'text-white',

  },
  {
    title: 'E-Commerce',
    color:'text-white',

  },
];

const InfiniteScrollHorizontal = () => {
  return (
    <section className="overflow-hidden py-10 bg-transparent">
      <div className="relative w-full">
        <motion.div
          className="flex gap-6 w-max whitespace-nowrap px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: 20,
          }}
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="min-w-[200px] sm:min-w-[250px] text-center"
            >
              <h3 className={`text-4xl font-semibold inf ${item.color} `}>{item.title}</h3>
              
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfiniteScrollHorizontal;
