import React from "react";

function Cards() {
  return (
    <div className="allCards">
      <div className="card">
        <h3>Óculos de grau</h3>
        <img src="assets/oculos01.png" alt="oculos de grau" />
        <p className="preco">R$ 500,00</p>
      </div>
      <div className="card">
        <h3>Óculos transition</h3>
        <img src="assets/oculos02.png" alt="oculos transition" />
        <p className="preco">R$ 750,00</p>
      </div>
      <div className="card">
        <h3>Óculos de sol</h3>
        <img src="assets/oculos03.png" alt="oculos de sol" />
        <p className="preco">R$ 700,00</p>
      </div>
      <div className="card">
        <h3>Óculos infantil</h3>
        <img src="assets/oculos04.png" alt="oculos infantil" />
        <p className="preco">R$ 500,00</p>
      </div>
    </div>
  )
}

export default Cards