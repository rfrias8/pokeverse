import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'

function PokemonCard({ url, name }) {
  const [images,setImages] = useState('');
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((pokemon) => {
      setImages(pokemon.sprites.front_default);
      setAbilities(pokemon.abilities);
    });
  }, []);

  console.log(images);
  console.log(abilities);


  return (
    
      <Card>
        <Card.Img src={images}></Card.Img>
        <Card.Title>{name}</Card.Title>
        <Card.Text as="div">
          <ul>
            {abilities.map(pokemonAbility => 
              <li> {pokemonAbility.ability.name}</li>
            )}
          </ul>
        </Card.Text>
      </Card>
  );
}

export { PokemonCard };
