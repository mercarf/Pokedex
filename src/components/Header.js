import React from 'react';

const Header = (props) => {
  console.log(props);
  return (
    <header className='header'>
      <h1>Pokédex</h1>
      <p>
        Bienvenido a nuestra pokédex, aquí podrás encontrar todos los pokemon
        que necesites, sus tipos y evoluciones.
      </p>
    </header>
  );
};

export default Header;
