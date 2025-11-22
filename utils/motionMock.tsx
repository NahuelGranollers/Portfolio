import React from 'react';

const motionProxy = new Proxy({}, {
  get: (target, prop) => {
    return ({ children, ...props }: any) => {
      // Destructure motion-specific props to avoid passing them to the DOM
      const { 
        initial, animate, exit, transition, variants, whileHover, whileTap, whileInView, viewport, 
        onPan, onPanStart, onPanEnd, onPanSessionStart, onTap, onTapStart, onTapCancel,
        layout, layoutId,
        ...validProps 
      } = props;
      return React.createElement(prop as string, validProps, children);
    };
  }
});

export const motion: any = motionProxy;
export const AnimatePresence = ({ children }: any) => <>{children}</>;
