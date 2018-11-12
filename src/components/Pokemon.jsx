import React from 'react';
import Spinner from './Spinner';
import { formatName } from './../utilities/formatting';
class Pokemon extends React.Component {
  componentDidMount() {
    const { pokemon } = this.props;
    this.props.fetchPokemonDetails(pokemon);
  }
  render() {
    const { pokemon } = this.props;
    return <>{pokemon ? <div>{formatName(pokemon.name)}</div> : <Spinner />}</>;
  }
}

export default Pokemon;
