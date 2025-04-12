'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TopStart() {
  const pathname = usePathname();

  useEffect(() => {
    const handlePopState = () => {
      // Run scroll on back/forward
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    
    // Scroll on pathname change (regular navigation)
    window.scrollTo({ top: 0, behavior: 'auto' });

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [pathname]);

  return null;
}
