import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                value={nome}
                aoAlterado={valor => setNome(valor)}
                obrigatorio={true}
                label="Nome"
                placeholder="Digite seu nome"
                />
                <CampoTexto 
                value={cargo}
                aoAlterado={valor => setCargo(valor)}
                obrigatorio={true}  
                label="Cargo" 
                placeholder="Digite seu cargo" />
                <CampoTexto
                value={imagem}
                aoAlterado={valor => setImagem(valor)} 
                label="Imagem" 
                placeholder="Digite o endereço da imagem" />
                <ListaSuspensa 
                valor={times}
                aoAlterado={valor => setTime(valor)}
                obrigatorio={true} 
                label='Times' 
                itens={times} />
                <Botao> Criar card </Botao>
            </form>
        </section>
    )
}

export default Formulario