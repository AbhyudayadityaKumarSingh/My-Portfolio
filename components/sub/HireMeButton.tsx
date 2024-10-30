import Link from "next/link"; // Import Link from Next.js
import { motion } from "framer-motion"; // Assuming you're using framer-motion for animations

// Slide in animation (dummy function)
const slideInFromLeft = (duration: number) => ({
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration } },
});

const HireMeButton: React.FC = () => {
  return (
    <Link href="https://cal.com/abhyuday31/15min">
      <motion.button
        variants={slideInFromLeft(1)}
        initial="initial"
        animate="animate"
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
      >
        Hire Me ->
      </motion.button>
    </Link>
  );
};

export default HireMeButton;