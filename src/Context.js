import React, { useState, useEffect, createContext } from "react";

const Context = createContext();

// the ids of the first and last pokemon of the generation to which it belongs
const indexArr = {
  generation1: [1, 151],
  generation2: [152, 251],
  generation3: [252, 386],
  generation4: [387, 493],
  generation5: [494, 649],
  generation6: [650, 721],
  generation7: [722, 809],
  generation8: [810, 898],
};

function ContextProvider({ children }) {
  const [formGeneration, setFormGeneration] = useState("generation1");
  // contains pokemon type that user chose
  const [formType, setFormType] = useState("steel");

  const [pokemonArrByGeneration, setPokemonArrByGeneration] = useState([]);
  const [pokemonArrByType, setPokemonArrByType] = useState([]);
  const [pokemonArrFiltered, setPokemonArrFiltered] = useState([]);

  function handleChangeGeneration(event) {
    setFormGeneration(event.target.value);
  }

  function handleChangeType(event) {
    setFormType(event.target.value);
  }

  useEffect(() => {
    let pokeArr = [];
    let splitUrl = "";
    formType !== "all"
      ? fetch(`https://pokeapi.co/api/v2/type/${formType}`)
          .then((res) => res.json())
          .then((data) => {
            data.pokemon.map(
              (pokemon) => (
                (splitUrl = pokemon.pokemon.url.split("/")),
                pokeArr.push(Number(splitUrl[splitUrl.length - 2]))
              )
            );
            setPokemonArrByType(pokeArr);
          })
      : setPokemonArrByType(pokeArr);
  }, [formType]);

  useEffect(() => {
    let pokeArr = [];
    for (
      let i = indexArr[`${formGeneration}`][0];
      i <= indexArr[`${formGeneration}`][1];
      i++
    ) {
      pokeArr.push(i);
    }
    setPokemonArrByGeneration(pokeArr);
  }, [formGeneration]);

  useEffect(() => {
    let pokeArr = [];
    formType === "all"
      ? (pokeArr = pokemonArrByGeneration)
      : (pokeArr = pokemonArrByGeneration.filter((pokemon) =>
          pokemonArrByType.includes(pokemon)
        ));
    setPokemonArrFiltered(pokeArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
