import React from "react";
import Cards from "../Cards";

function Produtos() {
  return (
    <div id="produtos" className="secaoProdutos">
      <div className="grupoProdutos">
        <div className="textProdutos">
          <h3>NOSSOS PRODUTOS</h3>
          <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos moedelos masculino, feminino e infantil;</p>
          <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado</p>
        </div>
        <div className="cardsProdutos">
          <Cards />
        </div>
        <div className="listProdutos">
          <ul> <p>Todos os nossos produtos incluem:</p>
            <li>Garantia de 1 ano</li>
            <li>Manutenção preventiva</li>
            <li>Descontos especiais na compra da segunda unidade</li>
            <li>Flexibilidade de pagamento</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Produtos