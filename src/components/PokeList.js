import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const handleFavClick = (ev) => {
    props.changeFav(ev.currentTarget.id);
    console.log(ev.currentTarget.id);
  };
  const pokemons = props.pokemons.map((pokemon) => {
    return (
      <li
        className='card'
        key={pokemon.id}
        id={pokemon.id}
        onClick={handleFavClick}
      >
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
