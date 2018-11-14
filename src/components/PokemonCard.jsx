import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import sprites from '../assets/sprites.png';
import { formatName } from '../utilities/formatting';

const PokemonCard = ({ monster, index }) => {
  const pokeXPos = -96 * index;
  const pokeSprite = {
    backgroundImage: `url(${sprites})`,
    backgroundPosition: `${pokeXPos}px 0`,
  };
  let pokeId = monster.url.split('/');
  pokeId = pokeId[pokeId.length - 2];
  return (
    <div className="pokemon" key={pokeId}>
      <Link to={`/${pokeId}`} style={{ textDecoration: 'none' }}>
        <div className="sprite" style={pokeSprite} />
        <div className="name">{formatName(monster.name)}</div>
      </Link>
    </div>
  );
};

PokemonCard.propTypes = {
  monster: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
};

export default PokemonCard;
