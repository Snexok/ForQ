import classNames from "classnames"
import cls from "./TextArea.module.scss"
import { FC, TextareaHTMLAttributes } from "react"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string
}

export const TextArea:FC<TextAreaProps> = (props) => {
    const {className, placeholder, value, onChange, onKeyDown} = props

    return (
        <textarea
            value={value}
            placeholder={placeholder} 
            className={classNames(cls.TextArea, className)}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}
