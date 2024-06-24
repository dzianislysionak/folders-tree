import  React from "react"
import { paths } from "../../lib/cleanPath"
import './RadioGroup.css'

const groupName = 'inputs'

export const RadioGroup = ({onChange}:Props )=>{
    return <div className="radio-group-container">
        {paths.map(path=>(
            <label htmlFor={path[0]} key={path[0]}>
                <input onChange={onChange} type="radio" id={path[0]} name={groupName} value={path[0]} />
                <span>{path[0]}</span>
            </label>
    ))}
    </div>
}

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}