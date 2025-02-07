
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 py-20">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-accent-soft bg-accent bg-opacity-10 px-4 py-1 rounded-full text-sm font-medium mb-6"
      >
        Welcome to Innovation
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
      >
        Transform Your Business
        <br />
        <span className="text-accent">With Premium Solutions</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg"
      >
        We combine cutting-edge technology with elegant design to create
        exceptional business solutions that drive growth and innovation.
      </motion.p>
    </section>
  );
};
