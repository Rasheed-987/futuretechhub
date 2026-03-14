import { useState, useCallback } from 'react';

export const useDropdownHover = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = useCallback(() => setIsOpen(true), []);
    const handleMouseLeave = useCallback(() => setIsOpen(false), []);
    const closeDropdown = useCallback(() => setIsOpen(false), []);

    return { isOpen, handleMouseEnter, handleMouseLeave, closeDropdown };
};
