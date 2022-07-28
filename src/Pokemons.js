//import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "./Context";
import Form from "./Form";
import Pokecard from "./Pokecard";

function Pokemons() {
  const { pokemonArrFiltered } = useContext(Context);

  const pokecardElements = pokemonArrFiltered.map((pokemonID) => (
    <Pokecard id={pokemonID} key={pokemonID} />
  ));

  return (
    <div>
      <Form />
      <div className="pokecard__container">{pokecardElements}</div>
    </div>
  );
}
export default Pokemons;
