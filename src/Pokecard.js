import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Type from "./components/Type";
import Name from "./components/Name";
import ID from "./components/ID";
import Sprite from "./components/Sprite";

function Pokecard(props) {
  const [isLoading, setIsLoading] = useState(true);

  const [pokemonData, setPokemonData] = useState({
    id: "",
    name: "",
    imageSmall: "",
    imageBig: "",
    types: "",
    stats: "",
    height: "",
    weight: "",
  });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(() => {
          return {
            name: data.name,
            imageSmall: data.sprites.front_default,
            imageBig: data.sprites.other["official-artwork"].front_default,
            types: data.types,
            stats: data.stats,
            height: data.height,
            weight: data.weight,
          };
        });
      });
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [props.id]);

  return (
    <div key="key" className={`${isLoading ? "hide" : "show"} pokecard`}>
      <Link to={`${props.id}`} state={{ data: pokemonData }}>
        <Sprite src={pokemonData.imageSmall} />
      </Link>
      <ID id={props.id} />
      <Name name={pokemonData.name} />
      <Type types={pokemonData.types} />
    </div>
  );
}
export default Pokecard;
