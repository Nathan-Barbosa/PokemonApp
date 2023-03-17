import './Titlegreybar.styles.scss'
import Logo from '../../../public/icons8-pokeball-48.png'

export function Titlegreybar (){
  return (
    <>
      <div className="main-content">
        <div className="titleGreyBar">
          <div className="content-title">
            <h1>Pokemon Aleatorio</h1>   
          </div>
          <div className="content-button">
            <button className="random-button">
              <img src={Logo} alt="" />
            </button>
          </div>       
        </div>
      </div>
    </>
  )
}

export default Titlegreybar;
