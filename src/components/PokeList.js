import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const pokemons = props.pokemons.map((pokemon) => {
    return (
      <li className='card ' key={pokemon.id}>
        <Pokemon
          name={pokemon.name}
          types={pokemon.types}
          evolution={pokemon.evolution}
          url={pokemon.url}
        />
      </li>
    );
  });
  return <ul className='cards'>{pokemons}</ul>;
};
export default PokeList;
