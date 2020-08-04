import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  const handlePokemonClick = (ev) => {
    props.addFav(ev.currentTarget.id);
    console.log('He sido clickado en pokelist', ev.currentTarget.id);
  };

  const typesLi = props.types.map((type, index) => {
    return (
      <li key={index} className={`${type} card__types__list`}>
        {type.toUpperCase()}
      </li>
    );
  });
  return (
    <li
      className={`card ${
        props.favPokemons.includes(props.id.toString()) ? 'fav' : ''
      }`}
      id={props.id}
      onClick={handlePokemonClick}
    >
      <img className='card__img' src={props.url} alt='imagen' />
      <h2 className='card__name '>{props.name}</h2>
      <div className='card__evolution'>
        <h4>Evolución de:</h4>
        <p className='card__evolution__name'>
          {props.evolution === null ? 'No ha evolucionado' : props.evolution}
        </p>
      </div>

      <ul className='card__types '>
        <h4>De tipo:</h4>
        <div className='card__types__box'>{typesLi}</div>
      </ul>
    </li>
  );
};

Pokemon.defaultProps = {
  name: 'Nombre Pokemon',
  evolution: 'Evolución de la que viene',
  types: ['tipo de pokemon'],
};

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
  evolution: PropTypes.string,
};

export default Pokemon;
