import React from "react"
import './style.css'

export default function Sobre() {
    return (
        <section className="sec-sobre" id="sobre">
            <div className="cont-sobre">
                <h1 className="titulos-secoes">Quem somos nós?</h1>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className="cont-cards-sobre">
                    <div className="card-sobre">
                        <img src="/assets/loja.png" />
                    </div>
                    <div className="card-sobre">
                        <h2>Nossas filiais</h2>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América Latina</p>
                    </div>
                    <div className="card-sobre">
                        <h2>Atendimento flexível</h2>
                        <p>Nosa equipe é treinada para te atender</p>
                    </div>
                    <div className="card-sobre">
                        <img src="/assets/atendimento.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}