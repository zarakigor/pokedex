import { useEffect, useState } from "react";

export function FetchSprite(id) {
  const [smallSprite, setSmallSprite] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSmallSprite(data.sprites.front_default);
      });
  }, [id]);

  return smallSprite;
}
