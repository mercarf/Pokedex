import React from 'react';

const Pokemon = (props) => {
  const typesLi = props.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <div className='card__description'>
      <img className='card__img' src={props.url} alt='imagen' />
      <h2 className='card__name '>{props.name}</h2>
      <h4>Evolución de:</h4>
      <p className='card__evolution'>
        {props.evolution === null ? 'No ha evolucionado' : props.evolution}
      </p>
      <h4>De tipo:</h4>
      <ul className='card__types '>{typesLi}</ul>
    </div>
  );
};

Pokemon.defaultProps = {
  name: 'Nombre Pokemon',
  evolution: 'Evolución de la que viene',
  types: ['tipo de pokemon'],
};

export default Pokemon;
