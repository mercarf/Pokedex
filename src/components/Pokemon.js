import React from 'react';

const Pokemon = (props) => {
  const typesLi = props.types.map((type, index) => {
    return (
      <li key={index} className={`${type} card__types__list`}>
        {type.toUpperCase()}
      </li>
    );
  });
  return (
    <div className='card__description'>
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
    </div>
  );
};

Pokemon.defaultProps = {
  name: 'Nombre Pokemon',
  evolution: 'Evolución de la que viene',
  types: ['tipo de pokemon'],
};

export default Pokemon;
