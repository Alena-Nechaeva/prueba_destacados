import React from 'react';

export function useOutsideClick(ref: React.RefObject<HTMLElement>, onOutsideClick: () => void) {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) onOutsideClick();
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
}
