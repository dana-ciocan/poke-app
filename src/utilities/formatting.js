// Format a Pokemon's name so it has a capital first letter
export const formatName = pokemonName => {
  return `${pokemonName.substring(0, 1).toUpperCase()}${pokemonName.substring(
    1
  )}`;
};
