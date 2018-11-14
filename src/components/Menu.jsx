import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';
import './Menu.css';

const Menu = ({ pokemonList }) => (
  <div className="menu">
    {pokemonList.results.map((curPoke, index) => (
      <PokemonCard monster={curPoke} key={curPoke.name} index={index} />
    ))}
  </div>
);

Menu.propTypes = {
  pokemonList: PropTypes.shape(),
};
Menu.defaultProps = {
  pokemonList: null,
};

export default Menu;
