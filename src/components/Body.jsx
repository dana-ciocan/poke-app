import { connect } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as PrActions from '../state-management/actions';
import Spinner from './Spinner';
import './Body.css';
import PokemonDetails from './PokemonDetails';
import Menu from './Menu';

class Body extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { pokemonList, isLoading } = this.props;

    return (
      <Router>
        <div className="page">
          {isLoading || pokemonList === null ? <Spinner /> : <Menu pokemonList={pokemonList} />}
          <Route path="/:id" component={PokemonDetails} />
        </div>
      </Router>
    );
  }
}

Body.propTypes = {
  pokemonList: PropTypes.shape(),
  fetchData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

Body.defaultProps = {
  pokemonList: null,
  isLoading: true,
};

const mapStateToProps = state => ({
  pokemonList: state.allPokemon,
  isLoading: state.allPokemonIsLoading,
  hasErrored: state.allPokemonHasErrored,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(PrActions.fetchAllPokemonData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Body);
