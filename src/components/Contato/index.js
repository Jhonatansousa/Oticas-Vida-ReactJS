import React from "react";

export default function Contato() {
  return (
    <div id="contato" className="secaoContato">
      <div className="conteudoContato">
        <div className="fale-conosco">
          <h2>FALE CONOSCO</h2>
          <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
        </div>
        <div className="redesContato">
          <div className="listaContato">
            <ul><p>Contato</p>
              <li>
                <a href="#contato">
                  <img src="assets/local.png" alt="icone local" />
                  Nova Iguaçu, RJ
                </a>

              </li>
              <li>
                <a href="#contato">
                  <img src="assets/telefone.png" alt="icone telefone" />
                  (21) 9999-9999
                </a>

              </li>
              <li>
                <a href="#contato">
                  <img src="assets/email.png" alt="icone email" />
                  contato@oticavida.com
                </a>

              </li>
            </ul>
          </div>

          <div className="listaSocial">
            <ul><p>Nossas Redes Sociais</p>
              <li>
                <a href="#contato" >
                  <img src="assets/fb.png" alt="icone facebook" />
                  /OticaVida</a>
              </li>
              <li>
                <a href="#contato" >
                  <img src="assets/ig.png" alt="icone instagram" />
                  @oticavidarj</a>
              </li>
              <li>
                <a href="#contato" >
                  <img src="assets/tt.png" alt="icone twitter" />
                  @oticavidarj</a
                ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}