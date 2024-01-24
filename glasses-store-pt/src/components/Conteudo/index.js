import React from 'react'
import Capa from './Capa'
import Produtos from './Produtos'
import Sobre from './Sobre'
import Contato from './Contato'
import './style.css'

export default function Conteudo() {
    return (
        <div className='all-conteudo'>
            <Capa />
            <Produtos />
            <Sobre />
            <Contato />
        </div>
    )
}