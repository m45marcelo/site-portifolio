import type { ReactNode } from "react"

interface CustomH2Props {
    children: ReactNode;
    className: string;
}
export const CustomH2: React.FC<CustomH2Props> = ({children, className}) => {
    return<h2 className={`${className} text-white font-fira-sans font-medium`}>{children}</h2>
}