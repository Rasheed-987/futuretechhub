import { useState, useCallback, useRef } from 'react';

export const useDropdownHover = () => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 450); // Small delay to allow moving mouse across the gap
    }, []);

    const closeDropdown = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(false);
    }, []);

    return { isOpen, handleMouseEnter, handleMouseLeave, closeDropdown };
};

