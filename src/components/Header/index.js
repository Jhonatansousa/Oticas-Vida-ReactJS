import React from 'react'


function Header() {
  return (
    <div className='header'>
      <nav>
        <div className='logo'>
          <img src="./assets/logo.png" alt='logomark'></img>
        </div>

        <ul className='menu'>
          <li>
            <a href="#produtos" >PRODUTOS</a>
          </li>
          <li>
            <a href="#sobre" >SOBRE</a>
          </li>
          <li>
            <a href="#contato" >CONTATO</a>
          </li>
        </ul>
      </nav>

    </div >
  );
}

export default Header;
