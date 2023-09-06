import { motion } from "framer-motion";
import { ReactNode } from "react";
const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
interface TransitionsProps {
  children: ReactNode;
}

const Transitions = ({ children }: TransitionsProps) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};
export default Transitions;
