import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string; //aqui, com o ponto de interrogação '?', eu digo que a propriedade description não é obrigatória, que é opcional
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="icone para voltar para pagina anterior"/>
                </Link>
                <img src={logoImg} alt="logo Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong> 

                {props.description ? <p>{props.description}</p> : null} 
                {/*nessa linha fazemos uma condicional, uma condição, um 'if/else' em JSX.
                Se tiver a propriedade 'description' ele retorna o que está dentro de '<p>', se não, é nulo*/}  

                {props.children}

            </div>

        </header>

    );
}

export default PageHeader;