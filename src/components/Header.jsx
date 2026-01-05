import React from 'react'
import { Link, Links } from 'react-router-dom';
import RandomGame from './RandomGame';
const Header = () => {
  return (
    <header>
      <RandomGame/>
      <Link to='/'>
        <h1>Games!</h1>
      </Link>

      <Link to="/about">About me!</Link>
    </header>
  );
}

export default Header