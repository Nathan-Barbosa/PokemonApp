import { FunctionComponent } from "react";
import { HeaderProps } from "./Header.interface";
import "./Header.styles.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export const Header: FunctionComponent<HeaderProps> = ({
  searchTitle,
  searchDescription,
}) => {
  const [pkmName, setPkmName] = useState<string>("");
  function setName() {
    window.localStorage.setItem("pkmName", pkmName);
  }
  return (
    <>
      <div className="headerMain">
        <div className="header-content">
          <div className="content1">
            <h2 className="title">{searchTitle}</h2>
            <div className="form">
              <input
                onChange={(e) => {
                  setPkmName(e.target.value);
                }}
                value={pkmName}
                type="text"
                placeholder="Charizard"
              />
              <button onClick={setName}>
                <AiOutlineSearch />
              </button>
            </div>
          </div>
          <div className="content2">
            <p>{searchDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};
