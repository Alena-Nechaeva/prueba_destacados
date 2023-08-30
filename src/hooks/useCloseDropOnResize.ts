import React from 'react';

export function useCloseDropOnResize(closeDropFunc: () => void) {
  React.useEffect(() => {
    window.addEventListener('resize', closeDropFunc);
    return () => {
      window.removeEventListener('resize', closeDropFunc);
    };
  }, []);
}
