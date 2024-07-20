import { motion } from "framer-motion";

export function BlurInText() {
  const variants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={variants}
      viewport={{ once: true }}
      className="font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] text-gold"
    >
      MURDER YOUR THIRST
    </motion.h1>
  );
}

export default BlurInText;