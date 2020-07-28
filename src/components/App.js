import React, { useState } from 'react';
import '../stylsheets/App.css';
import pokemonsFromApi from '../data/pokemon.json';
import PokeList from './PokeList';
import Header from './Header';
import Hero from './Hero';

const App = () => {
  const [pokemons, setPokemon] = useState(pokemonsFromApi);

  const [filterText, setFilterText] = useState('');

  const changeFilterText = (text) => {
    setFilterText(text);
  };

  const filteredPokemon = pokemons
    .filter((pokemon) => {
      return pokemon.deleted === false;
    })
    .filter((pokemon) => {
      return pokemon.subject.includes(filterText);
    });

  console.log('Renderizando...');

  return (
    <div className='App'>
      <Header />
      <Hero changeFilterText={changeFilterText} />
      <h2>Filtrando por: "{filterText}"</h2>

      <PokeList pokemons={pokemons} />
    </div>
  );
};

export default App;
