import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/33336355?s=460&u=24da94177f2e62cb27fff42f57aa49395497a423&v=4" alt="Maria Fernanda"/>
                <div>
                    <strong> Maria Fernanda</strong>
                    <span>Química</span>
                </div>
            </header>

            <p> Entusiasta das melhores tecnologias de química avançada. 
                <br /> <br />
                Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora:
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Icone WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
    </article>
    )
}

export default TeacherItem;