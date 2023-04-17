import React from "react";

function Sobre() {
  return (
    <div id="sobre" className="secaoSobre">
      <div className="conteudoSobre">
        <div className="textSobre">
          <h3>QUEM SOMOS NÓS?</h3>
          <p>Fundada em 2001, em Nova Iguaçu - Ri de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
        </div>
        <div className="allCardSobre">
          <div className="cardSobre">
            <img src="assets/loja.png" alt="imagem dentro da loja" />
          </div>
          <div className="cardSobre text">
            <h3>NOSSAS FILIAIS</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
          <div className="cardSobre text">
            <h3>ATENDIMENTO FLEXÍVEL</h3>
            <p>Nossa equipe é treinada para te atender</p>
          </div>
          <div className="cardSobre">
            <img src="assets/atendimento.png" alt="imagem de atendimento" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sobre

