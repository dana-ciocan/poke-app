import React from 'react';

class Pokemon extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    return (
      <>
        {pokemon ? (
          pokemon.results.map(curPoke => <div>{curPoke.name}</div>)
        ) : (
          <div>Loading</div>
        )}
      </>
    );
  }
}

export default Pokemon;
