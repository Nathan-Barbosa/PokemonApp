import { useEffect, useState } from "react";
import Body from "./components/Body/Body.component";
import { Greybar } from "./components/Greybar";
import { Header } from "./components/Header";
import { Titlegreybar } from "./components/Titlegreybar";
import "./styles/app.scss";
function App() {
  const title = "Nome ou Número";
  const [getName, setGetName] = useState<string>("");
  useEffect(() => {
    const interval = setInterval(() => {
      const teste = window.localStorage.getItem("pkmName");
      if (teste) {
        setGetName(teste);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Header
        searchTitle={title}
        searchDescription="Realize a busca por Pokémon pelo nome
  ou usando o número da Pokédex Nacional."
      />
      <Greybar />
      <Titlegreybar />
      <Body pkmName={getName} />
    </>
  );
}

export default App;
