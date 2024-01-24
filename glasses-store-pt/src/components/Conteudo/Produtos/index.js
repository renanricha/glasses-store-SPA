import React from "react"
import './style.css'

export default function Produtos() {
    return (
        <section id="produtos">
            <div className="cont-produtos">
                <h1 className="titulos-secoes">Nossos produtos</h1>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contem com a melhor qualidade do mercado.</p>
                <div className="cont-cards">
                    <div className="card">
                        <h2>Óculos de grau</h2>
                        <img src="/assets/oculos01.png" />
                        <p>R$ 500,00</p>
                    </div>
                    <div className="card">
                        <h2>Óculos transition</h2>
                        <img src="/assets/oculos02.png" />
                        <p>R$ 750,00</p>
                    </div>
                    <div className="card">
                        <h2>Óculos de sol</h2>
                        <img src="/assets/oculos03.png" />
                        <p>R$ 700,00</p>
                    </div>
                    <div className="card">
                        <h2>Óculos de infantil</h2>
                        <img src="/assets/oculos04.png" />
                        <p>R$ 500,00</p>
                    </div>
                </div>
                <p>Todos os nosso produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}