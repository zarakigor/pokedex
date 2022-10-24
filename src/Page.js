import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFetchExtraData } from "./hooks/useFetch"; // adını değiştir getFundementalData , getAllData
import Error from "./Error";
import Type from "./components/Type";
import Name from "./components/Name";
import Sprite from "./components/Sprite";
import Stats from "./components/Stats";
import Size from "./components/Size";
import Entry from "./components/Entry";
import EvolutionChain from "./components/EvolutionChain";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pokemonid]);

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

  // to get pokemon entries and evolution chain
  const extraData = useFetchExtraData(d.name);

  return (
    <div>
      {/* if url has any non numeric character redirect them to Error page */}
      {pokemonid.match(/[^$,.\d]/) ? (
        <Error />
      ) : (
        <div className="pokemonpage">
          <div className="pokemonpage__column--container">
            <div className="column--left column">
              <div className="pokemonpage__header">
                <Name name={d.name} isSoloPage={true} />
                <Type types={d.types} />
              </div>
              <Sprite src={d.imageBig} name={d.name} />
              <div>
                <Size size={{ height: `${d.height}`, weight: `${d.weight}` }} />
                <Entry entry={extraData.entry} />
              </div>
            </div>
            <div className="column--right column">
              <Stats stats={d.stats} />
              <EvolutionChain evolution={extraData.evolution} />
            </div>
          </div>
          <button onClick={() => navigate(-1)} className="btn">
            GO BACK
          </button>
        </div>
      )}
    </div>
  );
}

export default Page;

// <Link to={`/${rakam}`}>
//   <Sprite src={d.imageBig} name={d.name} />
// </Link>;
