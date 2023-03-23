import { useEffect, useState } from "react";
import Body from "./components/Body/Body.component";
import { Greybar } from "./components/Greybar";
import { Header } from "./components/Header/Header.component";
import { Titlegreybar } from "./components/Titlegreybar";
import "./styles/app.scss";
function App() {
  const title = "Nome ou Número";
  const [ activePkm, setActivePkm ] = useState(null);

  function searchPokemon(pokemonName: string){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    .then(response => response.json()).then(data => setActivePkm(data));   
    console.log(activePkm);
  }
  useEffect(() => {
    searchPokemon("1");

  }, [])
  return (
    <>
      <Header
        searchPokemon={searchPokemon}
        searchTitle={title}
        searchDescription="Realize a busca por Pokémon pelo nome
  ou usando o número da Pokédex Nacional."
      />
      <Greybar />
      <Titlegreybar searchPokemon={searchPokemon}/>
      {activePkm && <Body activePkm={activePkm}/>}
    </>
  );
}

export default App;
