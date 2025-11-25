interface CustomLabelProps {
    htmlFor: string;
    title: string
}

export const CustomLabel = ({htmlFor, title}:CustomLabelProps) => {
    return <label htmlFor={htmlFor} className="text-white font-medium text-[13px] xl:text-base font-inter mb-2">{title}</label>
}