import React, { useState } from 'react';
import '../stylsheets/App.css';
import pokemonsFromApi from '../data/pokemon.json';
import PokeList from './PokeList';

function App() {
  const [pokemons, setPokemon] = useState(pokemonsFromApi);
  const [favPokemons, setFavPokemon] = useState([]);
  console.log(pokemons);
  console.log(favPokemons);
  //Funcion que viene de lifting
  const addFav = (clickedId) => {
    console.log('Recibo este clickado en App desde pokelist', clickedId);
    // favPokemons = pokemons.push(clickedId);

    // const newFav = favPokemons;
    if (favPokemons.includes(clickedId)) {
      const unFavPokemon = favPokemons.filter(
        (pokemon) => pokemon !== clickedId
      );
      setFavPokemon(unFavPokemon);
      // console.log('unFavPokemon', unFavPokemon);
    } else {
      favPokemons.push(clickedId);
      setFavPokemon(favPokemons);
    }
    console.log('favPokemons', favPokemons);
  };

  const newFavPokemons = pokemons.filter((pokemon) =>
    favPokemons.includes(pokemon.id + '')
  );

  return (
    <div className='App'>
      <h1>Pokédex</h1>
      <p>
        Bienvenido a nuestra pokédex, aquí podrás encontrar todos los pokemon
        que necesites, sus tipos y evoluciones.
      </p>
      <h3>Pokemons resultado de la búsqueda</h3>
      <PokeList pokemons={pokemons} favPokemons={favPokemons} addFav={addFav} />
      <h3>Poke-Favoritos</h3>
      <PokeList pokemons={newFavPokemons} favPokemons={favPokemons} />
    </div>
  );
}

export default App;
