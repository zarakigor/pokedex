import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetchExtraData } from "./useFetch";
import Type from "./components/Type";
import Name from "./components/Name";
import Sprite from "./components/Sprite";
import Stats from "./components/Stats";
import Size from "./components/Size";
import Entry from "./components/Entry";
import Evolution from "./components/Evolution";

function Page() {
  const location = useLocation();
  // if user writes id of the pokemon in url manually prevent null value
  const Data = location.state ? location.state.data : "";
  const { pokemonid } = useParams();
  const navigate = useNavigate();

  const [newData, setNewData] = useState({
    id: "",
    name: "",
    imageBig: "",
    types: "",
    stats: "",
    height: "",
    weight: "",
  });

  // if user reach this page without using form
  useEffect(() => {
    if (!Data) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
        .then((res) => res.json())
        .then((data) => {
          setNewData(() => {
            return {
              name: data.name,
              imageBig: data.sprites.other["official-artwork"].front_default,
              types: data.types,
              stats: data.stats,
              height: data.height,
              weight: data.weight,
            };
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonid]);

  let d = Data ? Data : newData;

  const extraData = useFetchExtraData(d.name);

  return (
    <div className="pokemonpage">
      <div>
        <div className="pokemonpage__header">
          <Name name={d.name} isPage={true} />
          <Type types={d.types} />
        </div>
        <Sprite src={d.imageBig} name={d.name} />
        <div>
          <Size size={{ height: `${d.height}`, weight: `${d.weight}` }} />
          <Entry entry={extraData.entry} />
        </div>
      </div>
      <Stats stats={d.stats} />
      <Evolution evolution={extraData.evolution} />
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
}

export default Page;

// <Link to={`/${rakam}`}>
//   <Sprite src={d.imageBig} name={d.name} />
// </Link>;
