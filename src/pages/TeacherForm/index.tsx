import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';



function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend> Seus dados </legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biografia"></Textarea>

                </fieldset>

                <fieldset>
                    <legend> Sobre a aula </legend>

                    <Select name="subject" 
                            label="Matéria" 
                            options={[
                                {value:"Selecione uma matéria", label:"Selecione uma matéria"},
                                {value:"Artes", label:"Artes"},
                                {value:"Biologia", label:"Biologia"},
                                {value:"Sociologia", label:"Sociologia"},
                                {value:"Filosofia", label:"Filosofia"},
                                {value:"Português", label:"Português"},
                                {value:"História", label:"História"},
                                {value:"Geografia", label:"Geografia"},
                                {value:"Matemática", label:"Matemática"},
                                {value:"Ciências", label:"Ciências"},
                                {value:"Física", label:"Física"},
                                {value:"Química", label:"Química"},
                                {value:"Inglês", label:"Inglês"},
                            ]} 
                    />

                    <Input name="cost" label="Custo da sua hora por aula" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>

                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>     
        </div>
    )
}

export default TeacherForm;