import { useEffect, useState } from "react";
import Character from "./Character";

function CharacterList() {
  const [character, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      //console.log(data); El arreglo por medio de console log nos muestra un objeto con dos propiedades info y results, en la linea siguiente solo le pedieremos results
      setCharacters(data.results);
    }

    fetchData();
  }, []);

  return (
    <div>
      {character.map((character) => {
        return (
          <Character key={character.id} character={character}/>
        );
      })}
    </div>
  );
}

export default CharacterList;
