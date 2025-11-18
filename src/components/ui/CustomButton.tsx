import type { ReactNode } from "react";

interface CustomButtonProps{
    isPrimary: boolean;
    children: ReactNode;
}
export const CustomButton: React.FC<CustomButtonProps> = ({children, isPrimary}) => {
    return(
        <button type="button" className={
            `h-12.5 px-11.5 rounded-[1.875rem] cursor-pointer border border-black/64
            ${isPrimary ? "bg-primary drop-shadow-[0_0_4px] drop-shadow-primary" : "bg-secundary drop-shadow-[0_0_4px] drop-shadow-secundary"}
        `}>
            {children}
        </button>
    )
}