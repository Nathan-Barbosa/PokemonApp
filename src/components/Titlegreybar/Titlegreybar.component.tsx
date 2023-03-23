import './Titlegreybar.styles.scss'
import Logo from '../../../public/icons8-pokeball-48.png'
import { useState } from 'react'


interface TitlegreybarProps{
  searchPokemon: (pokemonName: string) => void;
}
export const Titlegreybar = ({
  searchPokemon
}: TitlegreybarProps) => {

  function getRandomNumber (){
    const random = Math.floor( 1 + Math.random() * 1010).toString();
    searchPokemon(random);
  }

  return (
    <>
      <div className="main-content">
        <div className="titleGreyBar" onClick={() => getRandomNumber()}>
          <div className="content-title">
            <h1>Pokemon Aleatorio</h1>   
          </div>
          <div className="content-button"> 
            <button className="random-button" > 
              <img src={Logo} alt="" />
            </button>
          </div>       
        </div>
      </div>
    </>
  )
};
