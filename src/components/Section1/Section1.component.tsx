import "./Section1.styles.scss";

interface Section1Props {
  pkmData : {
    name: string;
    id: number;
    sprites : string;
  }
}

export const Section1 = ({
  pkmData
}: Section1Props) => {
  return (
    <>
      <div className="section1-content">
        <div className="pkm-title">
          <h3>{pkmData.name}</h3>
          <p>Nº {pkmData.id}</p>
        </div>
        <div className="pkm-img">
          <img
            src={pkmData.sprites}
            alt="Pokemon-image"
          />
          <div className="img-change-button">
            <div className="default-img-button"></div>
            <div className="shiny-img-button"></div>
          </div>
        </div>

        <div className="pkm-type">
          <div className="type-1">Voador</div>
          <div className="type-2">Fogo</div>
        </div>
      </div>
    </>
  );
};
