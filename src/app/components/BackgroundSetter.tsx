'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function BodyBackgroundSetter() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      document.body.classList.add('bg-slate-900');
      document.body.classList.remove('bg-white');
    } else {
      document.body.classList.add('bg-white');
      document.body.classList.remove('bg-slate-900');
    }

    // Clean up by removing classes when the component unmounts or path changes
    return () => {
      document.body.classList.remove('bg-slate-900', 'bg-white');
    };
  }, [pathname]);

  return null;
}
