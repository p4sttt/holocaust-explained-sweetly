import {
  AnimatePresence,
  AnimationControls,
  MotionProps,
  Variants,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { ButtonHTMLAttributes, FC } from 'react';

type ParagraphProps = ButtonHTMLAttributes<HTMLDivElement> &
  MotionProps & {
    paragraph: string;
    controls: AnimationControls;
  };

export const Paragraph: FC<ParagraphProps> = ({
  paragraph,
  controls,
  ...props
}) => {
  const variants: Variants = {
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
    },
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
    },
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [-50, 50]);
  const rotateY = useTransform(x, [-50, 50], [-50, 50]);

  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        animate={controls}
        style={{
          x,
          y,
          rotateX,
          rotateY,
        }}
        transition={{
          type: 'tween',
          ease: 'easeIn',
          opacity: { duration: 1 },
          filter: { duration: 1.2 },
        }}
        drag
        dragElastic={0.1}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        className='max-w-lg m-auto px-10 py-8 border-4 bg-pink-50 border-pink-100 rounded-2xl'
        {...props}
      >
        <motion.p>{paragraph}</motion.p>
      </motion.div>
    </AnimatePresence>
  );
};
