import React from 'react';

// Mock component factory for motion.div, motion.h1, etc.
export const motion = new Proxy({}, {
  get: (target, prop) => {
    return ({ initial, animate, exit, transition, variants, whileHover, whileTap, whileInView, viewport, ...rest }: any) => {
      const Component = prop as any;
      return <Component {...rest} />;
    }
  }
});

export const AnimatePresence = ({ children }: any) => <>{children}</>;

// Mock hooks if needed (returning dummy values)
export const useScroll = () => ({ scrollY: { get: () => 0 }, scrollYProgress: { get: () => 0 } });
export const useTransform = () => 0;
export const useSpring = () => 0;
export const useAnimation = () => ({ start: () => {}, stop: () => {} });
export const useInView = () => false;
