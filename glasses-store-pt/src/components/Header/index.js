import React from 'react'
import './style.css'

export default function Header() {
    return (
        <header>
            <div className='logo-links'>
                <img src='/assets/logo.png' alt='logo da pagina' />
                <div className='links'>
                    <a href='#produtos'>PRODUTOS</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#contato'>CONTATO</a>
                </div>
            </div>
        </header>
    )
}