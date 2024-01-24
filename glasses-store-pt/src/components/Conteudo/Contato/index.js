import React from "react"
import './style.css'

export default function Contato() {
    return (
        <section className="sec-contato" id="contato">
            <div className="cont-contato">
                <h1 className="titulos-secoes">Fale conosco</h1>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="cont-cards">
                    <div className="card-contato">
                        <h2>Contato</h2>
                        <div className="cont-column">
                            <div className="cont-info">
                                <img src="/assets/local.png" />
                                <p>Nova Iguaçu, RJ</p>
                            </div>
                            <div className="cont-info">
                                <img src="/assets/telefone.png" />
                                <p>(21) 9999-9999</p>
                            </div>
                            <div className="cont-info">
                                <img src="/assets/email.png" />
                                <p>contato@oticavida.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-contato">
                        <h2>Nossas redes sociais</h2>
                        <div className="cont-column">
                            <div className="cont-info">
                                <img src="/assets/fb.png" />
                                <p>/OticaVida</p>
                            </div>
                            <div className="cont-info">
                                <img src="/assets/ig.png" />
                                <p>@oticavidarj</p>
                            </div>
                            <div className="cont-info">
                                <img src="/assets/tt.png" />
                                <p>@oticavidarj</p>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    )
}