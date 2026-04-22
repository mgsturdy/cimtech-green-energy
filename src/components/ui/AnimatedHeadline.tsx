'use client';

import { motion, useReducedMotion } from 'framer-motion';

type AnimatedHeadlineProps = {
  text: string;
  as?: 'h1' | 'h2';
  className?: string;
};

export function AnimatedHeadline({ text, as = 'h1', className = '' }: AnimatedHeadlineProps) {
  const reduced = useReducedMotion();
  const words = text.split(' ');
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: reduced ? 0 : 0.08 } },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { color: '#6B7A73' },
            visible: {
              color: ['#6B7A73', '#29B34B', '#F5F7F4'],
              transition: { duration: reduced ? 0 : 1, times: [0, 0.3, 1], ease: 'easeOut' },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
