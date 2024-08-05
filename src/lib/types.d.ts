import { ReactNode } from "react"

declare type AuthCardProps = {
    type: string,
    title: string,
    description?: string,
    button: string,
    href: string
}

declare type CustomInputProps = {
    label: string,
    name: string,
    placeholder: string,
    src: string,
    type: string,
    width: number,
    height: number,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void,
    error?: string | undefined | boolean
}

declare type TransitionLinkProps = {
    children?: ReactNode,
    href: string,
    direction: string,
    className: string,
}

declare type SignUpParams = {
    name: string,
    email: string,
    password: string
}

declare type SignInParams = {
    email: string,
    password: string
}