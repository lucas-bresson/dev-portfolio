'use client';

import { useEffect, useState } from 'react';

const Spotlight = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({
    x: undefined,
    y: undefined,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      <div
        className="spotlight-overlay pointer-events-none fixed inset-0"
        style={
          {
            '--x': `${cursorPosition.x}px`,
            '--y': `${cursorPosition.y}px`,
          } as React.CSSProperties
        }
      ></div>
      {children}
    </div>
  );
};

export default Spotlight;
