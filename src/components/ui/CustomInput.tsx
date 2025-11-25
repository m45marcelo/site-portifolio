interface CustomInputProps{
    className: string;
    placeholder: string;
    id: string;
}

export const CustomInput = ({ placeholder, id, className }: CustomInputProps) => {
    return(
        <input id={id} type="text" placeholder={placeholder} className={`${className} text-[0.875rem] xl:text-[1.125rem] font-medium font-inter p-3 xl:p-4 outline-0 text-white rounded-[0.625rem] bg-card-background border border-card-border placeholder:text-text-gray focus:border-primary `}/>
    )
}