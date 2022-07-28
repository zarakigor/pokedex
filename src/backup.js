import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [formGeneration, setFormGeneration] = useState(1);
  // contains pokemon type that user chose
  const [formType, setFormType] = useState("all");

  const [pokemonArrByGeneration, setPokemonArrByGeneration] = useState([]);
  const [pokemonArrByType, setPokemonArrByType] = useState([]);
  const [pokemonArrFiltered, setPokemonArrFiltered] = useState([]);

  function handleChangeGeneration(event) {
    setFormGeneration(event.target.value);
  }

  useEffect(() => {
    let pokemonArr = [];
    formGeneration
      ? fetch(`https://pokeapi.co/api/v2/generation/${formGeneration}`)
          .then((res) => res.json())
          .then((data) => {
            data.pokemon_species.map((pokemon) =>
              pokemonArr.push(pokemon.name)
            );
            setPokemonArrByGeneration(pokemonArr);
          })
      : // without generation input get all pokemons from national pokedex
        fetch("https://pokeapi.co/api/v2/pokedex/1")
          .then((res) => res.json())
          .then((data) => {
            data.pokemon_entries.map((pokemon) =>
              pokemonArr.push(pokemon.pokemon_species.name)
            );
            setPokemonArrByGeneration(pokemonArr);
          });
  }, [formGeneration]);

  function handleChangeType(event) {
    setFormType(event.target.value);
  }

  useEffect(() => {
    let pokemonArr = [];
    formType !== "all"
      ? fetch(`https://pokeapi.co/api/v2/type/${formType}`)
          .then((res) => res.json())
          .then((data) => {
            data.pokemon.map((pokemon) =>
              pokemonArr.push(pokemon.pokemon.name)
            );
            setPokemonArrByType(pokemonArr);
          })
      : setPokemonArrByType(pokemonArr);
  }, [formType]);

  useEffect(() => {
    let pokemonArr = [];
    pokemonArrByType.length !== 0
      ? (pokemonArr = pokemonArrByGeneration.filter((pokemon) =>
          pokemonArrByType.includes(pokemon)
        ))
      : (pokemonArr = pokemonArrByGeneration);

    setPokemonArrFiltered(pokemonArr);
  }, [pokemonArrByGeneration, pokemonArrByType]);

  return (
    <Context.Provider
      value={{
        formGeneration,
        handleChangeGeneration,
        formType,
        handleChangeType,
        pokemonArrByGeneration,
        pokemonArrByType,
        pokemonArrFiltered,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
