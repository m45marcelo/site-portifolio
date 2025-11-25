import type { ReactNode } from "react"

interface BackgroundProps{
    children: ReactNode;
}
export const Background: React.FC<BackgroundProps> = ({children}) => {
    return(
        <div className="w-full max-w-[1360px] h-screen relative">
            <div className="absolute top-46 xl:right-0 rounded-full drop-shadow-[0_4px_210px] drop-shadow-primary blur-[210px] h-53 w-53 md:h-76 md:w-76 xl:h-92 xl:w-92 bg-primary/45"/>
            <div className="absolute top-26 right-6 xl:right-58.5 rounded-full blur-[13.125rem] w-49 h-49 md:w-59 md:h-59 xl:h-79.5 xl:w-79.5 bg-secundary"/>
            <div className="absolute top-225 xl:left-38 rounded-full drop-shadow-[0_4px_210px] drop-shadow-primary blur-[210px] h-20 w-20 md:h-42 md:w-42 xl:h-62.25 xl:w-62.25 bg-primary/45"/>
            <div className="absolute lg:top-300 lg:right-100 xl:top-419.25 xl:right-140 rounded-full blur-[13.125rem] h-51.5 w-51.5 bg-secundary"/>
            <div className="absolute lg:top-480 lg:right-100 xl:top-600 xl:right-140 rounded-full blur-[13.125rem] h-51.5 w-51.5 bg-secundary"/>
            {children}
        </div>
    )
}