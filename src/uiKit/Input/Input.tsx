import React, {useId} from "react"
import './Input.css'

export const Input: React.FC<InputProps> = (props)=>{
    const randomId = useId()
    const id = props.id || randomId
    return (
        <input className="text-input" id={id} {...props}/>
)}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> 