import React, {SelectHTMLAttributes} from 'react';
import './styles.css';



interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { // aqui importamos todas as propriedades HTML que podemos utilizar dentro do form
    label:string;
    name:string;
}

const Select: React.FunctionComponent<SelectProps> = ({ label, name, ...rest}) => {
    return(
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}/>
        </div>
    );
}

export default Select;