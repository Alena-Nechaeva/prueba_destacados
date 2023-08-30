import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const noop = () => {};

export function Dropdown({ button, children, isOpen, onClose = noop, onOpen = noop }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  React.useEffect(() => {
    setIsDropdownOpen(isOpen);
  }, [isOpen]);

  React.useEffect(() => {
    isDropdownOpen ? onOpen() : onClose();
  }, [isDropdownOpen]);

  function handleOpen() {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }

  return (
    <div
      className={styles.container}
      onClick={handleOpen}
    >
      {button}
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div
            className={styles.list}
            // onClick={() => setIsDropdownOpen(false)}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
