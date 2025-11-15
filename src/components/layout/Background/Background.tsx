import type { ReactNode } from "react"

interface BackgroundProps{
    children: ReactNode;
}
export const Background: React.FC<BackgroundProps> = ({children}) => {
    return(
        <div className="w-full h-screen relative">
            <div className="absolute top-26 right-58.5 rounded-full blur-[260px] h-79.5 w-79.5 bg-secundary"/>
            <div className="absolute top-46 right-0 rounded-full blur-[255px] h-92 w-92 bg-primary"/>
            {children}
        </div>
    )
}