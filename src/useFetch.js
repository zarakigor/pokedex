import { useState } from "react";

export function useFetchData(id) {
  const [description, setDescription] = useState("");

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // to find latest English description of pokemon
      const flavorText = data.flavor_text_entries;
      let isFound = false;
      for (let i = flavorText.length - 1; !isFound; i--) {
        if (flavorText[i].language.name === "en") {
          setDescription(flavorText[i].flavor_text);
          isFound = true;
        }
      }

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
