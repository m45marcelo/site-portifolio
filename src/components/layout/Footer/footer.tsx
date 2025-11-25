import { CustomH2 } from "../../other/CustomH2"
import { CustomText } from "../../other/CustomText"

export const Footer = () => {
    return(
        <footer className="flex flex-col xl:flex-row px-5 xl:px-20 justify-between items-center w-full border-t border-t-border-header xl:h-20">
            <CustomH2 className="text-base xl:text-[1.25rem] mt-2 xl:mt-0">Marcelo Augusto.dev</CustomH2>
            <CustomText className="text-white text-bold text-center xl:text-left text-[0.625rem] xl:text-[0.75rem] xl:w-[707px]  mt-2 xl:mt-0">© 2025 Marcelo Augusto. Todos os direitos reservados.</CustomText>
        </footer>
    )
}