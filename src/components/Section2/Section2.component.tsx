import "./Section2.styles.scss";


export function Section2() {
  
  return (
    <>
      <div className="section2-content">
        <h1>Status</h1>
        <div className="status">
          
          <div className="attributes">
            <div className="attribute-name">Hp</div>
            <div className="attribute-value">45</div>
          </div>

          <div className="attributes">
            <div className="attribute-name">Attack</div>
            <div className="attribute-value">15</div>
          </div>

          <div className="attributes">
            <div className="attribute-name">Defense</div>
            <div className="attribute-value">14</div>
          </div>

          <div className="attributes">
            <div className="attribute-name">Special Attack</div>
            <div className="attribute-value">17</div>
          </div>

          <div className="attributes">
            <div className="attribute-name">Special Defense</div>
            <div className="attribute-value">16</div>
          </div>

          <div className="attributes">
            <div className="attribute-name">Speed</div>
            <div className="attribute-value">19</div>
          </div>
        </div>
      </div>
    </>
  );
}
