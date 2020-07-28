import React from 'react';

const Hero = (props) => {
  const handleFilterText = (ev) => {
    props.changeFilterText(ev.currentTarget.value);
  };

  return (
    <hero className='hero'>
      <form>
        <p>Busca tu pokemon</p>
        <label>
          Nombre
          <input
            className='form__input-text'
            type='text'
            placeholder='Buscar un correo'
            onChange={handleFilterText}
          />
        </label>
        <label>
          Tipo:
          <select>
            <option>Bug</option>
            <option>Fire</option>
            <option>Flying</option>
            <option>Grass</option>
            <option>Poison</option>
            <option>Water</option>
          </select>
        </label>
        <label>
          Localización:
          <select>
            <option>...</option>
          </select>
        </label>
      </form>
    </hero>
  );
};

export default Hero;
