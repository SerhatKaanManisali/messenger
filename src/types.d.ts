declare type AuthCardProps = {
    type: string,
    title: string,
    description?: string,
    button: string,
    href?: string
}

declare type CustomInputProps = {
    label: string,
    placeholder: string,
    src: string,
    type: string,
    width: number,
    height: number
}

declare type TransitionLinkProps = {
    children: ReactNode,
    href: string,
    direction: string,
    className: string
}