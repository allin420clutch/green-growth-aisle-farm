import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');

    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // Try immediately and after a tick for content that mounts after route change
    scroll();
    const t = setTimeout(scroll, 50);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
