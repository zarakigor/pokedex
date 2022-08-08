import { useEffect, useState } from "react";

// return etmek için array kullan description ve evolvechain diye

export function useFetchExtraData(id) {
  const [extraData, setExtraData] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // to find latest English description of pokemon
        const flavorText = data.flavor_text_entries;
        let isFound = false;
        for (let i = flavorText.length - 1; !isFound; i--) {
          if (flavorText[i].language.name === "en") {
            isFound = true;
            setExtraData((prevState) => ({
              ...prevState,
              flavor: flavorText[i].flavor_text,
            }));
          }
        }

        return data.evolution_chain.url;
        // e.g. https://pokeapi.co/api/v2/evolution-chain/2 is for charmander, charmeleon and charizard
      })
      .then((url) => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            let evoChain = [];
            let evoData = data.chain;

            do {
              let evoDetails = evoData["evolution_details"][0];
              let splitUrl = evoData.species.url.split("/");

              evoChain.push({
                species_name: evoData.species.name,
                id: splitUrl[splitUrl.length - 2],
                min_level: !evoDetails ? 1 : evoDetails.min_level,
                trigger_name: !evoDetails ? null : evoDetails.trigger.name,
                item: !evoDetails ? null : evoDetails.item,
              });
              evoData = evoData["evolves_to"][0];
            } while (!!evoData && evoData.hasOwnProperty("evolves_to"));
            setExtraData((prevState) => ({
              ...prevState,
              evolution: evoChain,
            }));
          });
      });
  }, [id]);

  return extraData;
}

// flavorText[i].flavor_text

// setExtraData((prevState) => ({
//   ...prevState,
//   evolution: 4,
// }))
