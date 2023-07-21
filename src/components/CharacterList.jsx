import { useEffect, useState } from "react";
import Character from "./Character";

function CharacterList() {
  const [character, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      //console.log(data); El arreglo por medio de console log nos muestra un objeto con dos propiedades info y results, en la linea siguiente solo le pedieremos results
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, []);


  return (
    <div className="container">
      {
        loading ? (<h1>Cargadon datos</h1>) : (
          <div className="row">
            {character.map((character) => {
              return (
                <div className="col-md-4" key={character.id} >
                  <Character character={character} />
                </div>
              );
            })}
          </div>
        )
      }

    </div>
  );
}

export default CharacterList;
