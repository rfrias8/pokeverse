import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect( () => {
    const fetchPokemon = async () => {
      const res = await fetch(pokeApi);
      const data = await res.json();
      setPokemonList(data);
      console.log(pokemonList)
    }

    fetchPokemon()
  }, []); 


  return (
    <div data-testid="app">
      <Navigation />

      <h1>Pokemon should appear here</h1>
      <PokemonCard />
    </div>
  );
}

export { App };
