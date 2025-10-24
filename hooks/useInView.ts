import { useEffect, useRef, useState } from 'react';

export const useInView = <T extends Element>(options?: IntersectionObserverInit) => {
 const ref = useRef<T | null>(null);
 const [inView, setInView] = useState(false);

 useEffect(() => {
 if (!ref.current) return;
 const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 setInView(true);
 observer.unobserve(entry.target);
 }
 });
 }, options || { threshold:0.25 });

 observer.observe(ref.current);

 return () => observer.disconnect();
 }, [ref, options]);

 return { ref, inView };
};

export default useInView;
