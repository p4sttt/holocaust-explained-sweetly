import {
  AnimationControls,
  Variants,
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { FC, useEffect } from 'react';

interface CursorProps {
  controls: AnimationControls;
}

export const Cursor: FC<CursorProps> = ({ controls }) => {
  const variants: Variants = {
    default: {
      scale: 1,
      color: '#f472b6',
    },
    hover: {
      scale: 1.5,
      color: '#e879f9',
    },
    draggeble: {
      scale: 0.6,
      color: '#9d174d',
    },
  };

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 45, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <motion.div
      className='cursor'
      initial='default'
      variants={variants}
      animate={controls}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className='w-5 h-5'
      >
        <path d='M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z' />
      </svg>
    </motion.div>
  );
};
