import "./Section2.styles.scss";

interface Section2Props {
  pkmStats: [
    {
      base_stat: number;
      stat: {
        name: string;
      }
    }
  ]
}

export const Section2 = ({
  pkmStats
}: Section2Props) => {
  return (
    <>
      <div className="section2-content">
        <h2>Status</h2>
        <div className="status">
          {pkmStats.map((i) => (
            <div className="attributes" key={i.stat.name}>
            <div className="attribute-name">{i.stat.name.replace('-',' ')}</div>
            <div className="attribute-value">{i.base_stat}</div>
          </div>
          ))}     
        </div>
      </div>
    </>
  );
}
