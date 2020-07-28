import React, { useState } from 'react';
import '../stylsheets/App.css';
import pokemonsFromApi from '../data/pokemon.json';
import PokeList from './PokeList';

function App() {
  const [pokemons, setPokemon] = useState(pokemonsFromApi);
  return (
    <div className='App'>
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;
