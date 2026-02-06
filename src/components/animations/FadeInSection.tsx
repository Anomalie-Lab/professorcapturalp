import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const FadeInSection = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up' 
}: FadeInSectionProps) => {
  
  const getVariants = (): Variants => {
    const distance = 50;
    
    const hiddenState: any = { opacity: 0 };
    if (direction === 'up') hiddenState.y = distance;
    if (direction === 'down') hiddenState.y = -distance;
    if (direction === 'left') hiddenState.x = distance;
    if (direction === 'right') hiddenState.x = -distance;

    return {
      hidden: hiddenState,
      visible: { 
        opacity: 1, 
        y: 0, 
        x: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut" as const,
          delay: delay
        }
      }
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
