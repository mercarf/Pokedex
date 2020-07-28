import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const pokemons = props.pokemons.map((pokemon, index) => {
    return (
      <li className='card ' key={index} id={pokemon.id}>
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
