import { FunctionComponent } from 'react'
import { HeaderProps } from './Header.interface'
import './Header.styles.scss'
import { AiOutlineSearch } from 'react-icons/ai'
export const Header: FunctionComponent<HeaderProps> = ({
  searchTitle,
  searchDescription
}) => {
  return (
    <>
      <div className="headerMain">
        <div className="header-content">
          <div className="content1">
            <h2 className="title">{searchTitle}</h2>
            <div className="form">
              <input type="text" placeholder="Charizard"/>
              <button><AiOutlineSearch /></button>
            </div>
          </div>
          <div className="content2">
          <p>{searchDescription}</p>
          </div>
        </div>
      </div>
    </>
  )
}