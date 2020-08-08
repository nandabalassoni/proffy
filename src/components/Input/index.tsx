import React, {InputHTMLAttributes} from 'react';
import './styles.css';



interface InputProps extends InputHTMLAttributes<HTMLInputElement> { // aqui importamos todas as propriedades HTML que podemos utilizar dentro do form
    label:string;
    name:string;
}

const Input: React.FunctionComponent<InputProps> = ({ label, name, ...rest}) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;