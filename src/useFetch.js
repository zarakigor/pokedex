import React, { useContext, useState } from "react";
import { Context } from "./Context";

export function useFetchData(id) {
  const [description, setDescription] = useState("");

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // setDescription(
      //   data.flavor_text_entries[data.flavor_text_entries.length - 3]
      //     .flavor_text
      // );
      setDescription(data.flavor_text_entries[0].flavor_text);
      return data.evolution_chain.url;
    })
    .then((url) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });

  return description;
}

export function useFetchEvolution(id) {
  const [evolutionChain, setEvolutionChain] = useState("");

  fetch();

  return evolutionChain;
}
