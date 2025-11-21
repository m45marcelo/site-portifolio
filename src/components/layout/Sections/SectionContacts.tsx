import { CustomH2 } from "../../other/CustomH2"
import { CustomLabel } from "../../other/CustomLabel"
import { CustomInput } from "../../ui/CustomInput"

import iconTelephone from "../../../assets/icon-telephone.png";
import iconEmail from "../../../assets/icon-email.png";
import iconLocal from "../../../assets/icon-local.png";
import { CustomText } from "../../other/CustomText";
import { CustomButtonAction } from "../../ui/CustomButonAction";

export const SectionContacts = () => {
    return(
        <section id="contacts" className="w-full flex flex-col items-center max-w-299.5 mb-15"> 
            <CustomH2 className="text-[2rem] h-11.5 mb-10 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#7A5DFC] after:to-[#EC6B90]">Sobre Min</CustomH2>
            <div className="flex w-full gap-5">
                <form className="flex flex-col w-full max-w-147.25">
                    <div className="flex gap-3.25 mb-4.5">
                        <div className="flex flex-col w-full">
                            <CustomLabel htmlFor="name" title="Nome"/>
                            <CustomInput className="h-12.5" id="name"  placeholder="Seu Nome"/>
                        </div>
                        <div className="flex flex-col w-full">
                            <CustomLabel htmlFor="email" title="E-mail"/>
                            <CustomInput className="h-12.5" id="email"  placeholder="Seu@email.com"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-4.5">
                            <CustomLabel htmlFor="email" title="E-mail"/>
                            <textarea className="h-45 w-full text-[1.125rem] resize-none font-medium font-inter p-4 outline-0 text-white rounded-[0.625rem] bg-card-background border border-card-border placeholder:text-text-gray focus:border-primary" placeholder="Sua mensagem"/>
                    </div>
                    <button type="submit" className="w-full h-12 cursor-pointer drop-shadow-[0_0_4px] drop-shadow-primary rounded-[0.625rem] bg-primary text-white text-[1.125rem] border border-black/64 font-fira-sans font-medium">Enviar Mensagem</button>
                </form>
                <div className="flex flex-col justify-between w-full max-w-147.25 p-5 bg-card-background border border-card-border rounded-[0.625rem]">
                    <div className="flex flex-col">
                        <CustomH2 className="text-[1.5rem] mb-4.5">Informações de Contato</CustomH2>
                        <div className="flex flex-col gap-4.5">
                            <div className="flex gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary flex justify-center items-center">
                                    <img alt="icon local" src={iconLocal} className="h-4"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <CustomText className="text-[1.125rem] font-semibold text-white">Localização</CustomText>
                                    <CustomText className="text-base font-medium text-text-gray">Balsas - Ma</CustomText>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary flex justify-center items-center">
                                    <img alt="icon telephone" src={iconEmail} className="h-4"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <CustomText className="text-[1.125rem] font-semibold text-white">E-mail</CustomText>
                                    <CustomText className="text-base font-medium text-text-gray">m45marceloaugusto@gmail.com</CustomText>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary flex justify-center items-center">
                                    <img alt="icon telephone" src={iconTelephone} className="h-4"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <CustomText className="text-[1.125rem] font-semibold text-white">Telefone</CustomText>
                                    <CustomText className="text-base font-medium text-text-gray">(99) 9 9214-4545</CustomText>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <CustomH2 className="text-[1.125rem] text-white font-bold">Redes Socias</CustomH2>
                        <div className="flex gap-3.75">
                            <CustomButtonAction icon="GitHub" heightButton="medium" heightIcon={18} widthIcon={18}/>
                            <CustomButtonAction icon="Linkedin" heightButton="medium" heightIcon={18} widthIcon={18}/>
                            <CustomButtonAction icon="Instagram" heightButton="medium" heightIcon={18} widthIcon={18}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}