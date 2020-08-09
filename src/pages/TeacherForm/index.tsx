import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';



function TeacherForm(){

    //const scheduleItems = useState

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '8:OO AM', to: '4:00 PM'},
        {week_day: 2, from: '9:OO AM', to: '6:00 PM'},
    ])

    function addNewScheduleItem(){

        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: ''}
        ]);
    }
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

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick = {addNewScheduleItem}> + Novo horário</button>
                    </legend>

                    {scheduleItems.map(scheduleItem =>{
                        return(
                            <div key = {scheduleItem.week_day}className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da semana" 
                                    options={[
                                        {value:"0", label:"Domingo"},
                                        {value:"1", label:"Segunda-feira"},
                                        {value:"2", label:"Terça-feira"},
                                        {value:"3", label:"Quarta-feira"},
                                        {value:"4", label:"Quinta-feira"},
                                        {value:"5", label:"Sexta-feira"},
                                        {value:"6", label:"Sábado"},
                                    ]} 
                                />

                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="Até" type="time" />
                    </div>
                        );
                    })}
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