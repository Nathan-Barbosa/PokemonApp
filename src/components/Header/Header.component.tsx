
import "./Header.styles.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

interface HeaderProps{
  searchPokemon: (pokemonName: string) => void;
  searchTitle: string;
  searchDescription: string;
}

export const Header = ({
  searchTitle,
  searchDescription,
  searchPokemon
}: HeaderProps) => {
  const [pkmName, setPkmName] = useState<string>("");

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
              <button onClick={() => searchPokemon(pkmName)}>
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
