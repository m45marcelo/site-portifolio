import type { ReactNode } from "react"

interface BackgroundProps{
    children: ReactNode;
}
export const Background: React.FC<BackgroundProps> = ({children}) => {
    return(
        <div className="w-full h-screen relative">
            <div className="absolute top-46 right-0 rounded-full drop-shadow-[0_4px_210px] drop-shadow-primary blur-[210px] h-92 w-92 bg-primary/45"/>
            <div className="absolute top-26 right-58.5 rounded-full blur-[13.125rem] h-79.5 w-79.5 bg-secundary"/>
            <div className="absolute top-225 left-38 rounded-full drop-shadow-[0_4px_210px] drop-shadow-primary blur-[210px] h-62.25 w-62.25 bg-primary/45"/>
            <div className="absolute top-419.25 right-140 rounded-full blur-[13.125rem] h-51.5 w-51.5 bg-secundary"/>
            <div className="absolute top-600 right-140 rounded-full blur-[13.125rem] h-51.5 w-51.5 bg-secundary"/>
            {children}
        </div>
    )
}