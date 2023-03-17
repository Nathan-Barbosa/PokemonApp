import Section1 from '../Section1/Section1.component'
import Section2 from '../Section2/Section2.component'
import './Body.styles.scss'

export default function Body (){
  return (
    <>
      <div className="body">
        <Section1/>
        <Section2/>
      </div>
    </>
  )
}