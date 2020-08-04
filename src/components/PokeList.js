import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const pokemons = props.pokemons.map((pokemon) => {
    return (
      <Pokemon
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        types={pokemon.types}
        evolution={pokemon.evolution}
        url={pokemon.url}
        favPokemons={props.favPokemons}
        addFav={props.addFav}
      />
    );
  });
  return <ul className='cards'>{pokemons}</ul>;
};

export default PokeList;
