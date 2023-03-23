import { Section1 } from "../Section1/Section1.component";
import { Section2 } from "../Section2/Section2.component";
import "./Body.styles.scss";

interface BodyProps {
  activePkm : {
    name: string;
    id: number;
    sprites : {
      versions: {
        "generation-v" : {
          "black-white" : {
            animated : {
              "front_default" : string;
            } 
          }
        }
      }
    };
    stats: [
      {
        base_stat: number;
        stat: {
          name: string;
        }
      }
    ]
  }
}
export default function Body({ activePkm }: BodyProps) {
  const pkmData = {
    name: activePkm.name,
    id: activePkm.id,
    sprites: activePkm.sprites.versions["generation-v"]["black-white"].animated["front_default"]
  }

  return (
    <>
      <div className="body">
        <Section1 pkmData={pkmData} />
        <Section2 pkmStats={activePkm.stats}/>
      </div>
    </>
  );
}
