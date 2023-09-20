import { useEffect, useState } from "react";

interface PaginationButtonProps {
    label: string;
    onClick: () => void;
    shouldBeDisabled: boolean;
    isActive?: boolean;
};

const PaginationButton = ({ label, onClick, shouldBeDisabled, isActive = false}: PaginationButtonProps) => {
    const [disabled, setDisabled] = useState(shouldBeDisabled);

    useEffect(()=> {
        setDisabled(shouldBeDisabled);
    }, [shouldBeDisabled]);

    return (
        <button 
        className={`w-10 h-10 items-center justify-center block border rounded 
                ${isActive ? 'bg-blue-500 text-white' : 'text-white'} text-lg`} 
        onClick={onClick} 
        disabled={disabled}>
            {label}
        </button>
    )

};


export default PaginationButton;