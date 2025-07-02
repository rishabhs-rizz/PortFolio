"use client";
import { motion } from "framer-motion";

interface ShinyButtonProps {
  text: string;
}

export const ShinyButton = ({ text }: ShinyButtonProps) => {
  return (
    <motion.a
      target="_blank" // 👈 this opens link in a new tab
      rel="noopener noreferrer" // 👈 security best practice
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-6 py-2 rounded-md relative radial-gradient cursor-pointer text-neutral-100 tracking-wide font-light block linear-mask"
    >
      {text}
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.a>
  );
};

export default ShinyButton;
