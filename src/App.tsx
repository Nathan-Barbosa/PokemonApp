
import Body from './components/Body/Body.component';
import {Greybar} from './components/Greybar';
import { Header } from './components/Header'
import { Titlegreybar } from './components/Titlegreybar';
import './styles/app.scss'
function App() {
  const title = "Nome ou Número";
  return (
    <>
      <Header searchTitle={title} searchDescription="Realize a busca por Pokémon pelo nome
  ou usando o número da Pokédex Nacional."/>
      <Greybar />
      <Titlegreybar />
      <Body />
    </>
  )
}

export default App
