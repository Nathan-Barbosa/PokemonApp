import './Section1.styles.scss'
import { Section1Props } from './Section1.interface'
import { FunctionComponent } from 'react'

export const Section1:FunctionComponent<Section1Props> = ({
  pkmName,
  pkmNumber,
  pkmImg,
  pkmType1,
  pkmType2
}) => {
  return (
    <>
      <div className="section1-content">
        <div className="pkm-title">
          <h3>Charizard</h3>
          <p>Nº 6</p>
        </div>
        <div className="pkm-img">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="Pokemon-image" />
          <div className="img-change-button">
            <div className="default-img-button">
            </div>
            <div className="shiny-img-button">
            </div>
          </div>
        </div>
          
          <div className="pkm-type">
            <div className="type-1">Voador</div>
            <div className="type-2">Fogo</div>          
          </div>
          
      </div>
    </>
  )
}