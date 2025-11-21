import { CustomH2 } from "../../other/CustomH2"
import { CustomText } from "../../other/CustomText"

export const Footer = () => {
    return(
        <footer className="flex px-20 justify-between items-center w-full border-t border-t-border-header h-20">
            <CustomH2 className="text-[1.25rem]">Marcelo Augusto.dev</CustomH2>
            <CustomText className="text-white text-bold text-[0.75rem] w-[707px]">© 2025 Marcelo Augusto. Todos os direitos reservados.</CustomText>
        </footer>
    )
}