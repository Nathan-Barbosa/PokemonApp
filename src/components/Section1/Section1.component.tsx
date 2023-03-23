import { useEffect, useState } from "react";
import "./Section1.styles.scss";

interface Section1Props {
  pkmData : {
    name: string;
    id: number;
    sprites : string;
    spritesShiny: string;
    types: [
      {
        type: {
          name: string;
        }
      }          
    ]
  }
}

export const Section1 = ({
  pkmData
}: Section1Props) => {

  const [ changeSprite , setChangeSprite ] = useState<string>("");

  useEffect(() => {
    setChangeSprite(pkmData.sprites);
  }, [pkmData])
  
  return (
    <>
      <div className="section1-content">
        <div className="pkm-title">
          <h3>{pkmData.name}</h3>
          <p>Nº {pkmData.id}</p>
        </div>
        <div className="pkm-img">
          <img
            src={changeSprite}
            alt="Pokemon-image"
          />
          <div className="img-change-button">
            <div className="default-img-button" onClick={() => setChangeSprite(pkmData.sprites)}></div>
            <div className="shiny-img-button" onClick={() => setChangeSprite (pkmData.spritesShiny)}></div>
          </div>
        </div>

        <div className="pkm-type">
          {pkmData.types.map((item, i) => (
              <div className={"type-"+item.type.name} key={i}>{item.type.name}</div>
            ))          
          }          
        </div>
      </div>
    </>
  );
};
