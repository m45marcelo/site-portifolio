import type { ReactNode } from "react";

interface CustomTextProps{
    className: string;
    children: ReactNode;
}
export const CustomText: React.FC<CustomTextProps> = ({className, children}) => {
    return <p className={`${className} font-inter`}>{children}</p>
}