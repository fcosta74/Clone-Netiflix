import React from 'react';
import './styles.scss';
import Logo from '../../assets/logo.png';

// eslint-disable-next-line import/prefer-default-export, react/prop-types
export function Header({ black }){
  return(
    <header className={black ? 'black' : ''}>
      <div className="logo">
          <a href=" # ">
            <img src={Logo} alt="Codeflix" />
          </a>
      </div>

      <div className="user">
        <a href=" # ">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
        </a>
      </div>
    </header>
  )
}