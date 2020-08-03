import React, { useState } from 'react';
import '../stylsheets/App.css';
import pokemonsFromApi from '../data/pokemon.json';
import PokeList from './PokeList';

function App() {
  const [pokemons, setPokemon] = useState(pokemonsFromApi);

  //Funcion que viene de lifting
  const changeFav = (clickedId) => {
    console.log('Target:', clickedId);
    // actualizar estado activeFav con target
    // añadir clase especial al colapsble que esté en activeCollapsible
  };

  return (
    <div className='App'>
      <h1>Pokédex</h1>
      <p>
        Bienvenido a nuestra pokédex, aquí podrás encontrar todos los pokemon
        que necesites, sus tipos y evoluciones.
      </p>
      <PokeList pokemons={pokemons} changeFav={changeFav} />
    </div>
  );
}

export default App;
