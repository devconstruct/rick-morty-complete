import { useEffect, useState } from "react";
import Character from "./Character";

function CharacterList() {
  const [character, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      //console.log(data); El arreglo por medio de console log nos muestra un objeto con dos propiedades info y results, en la linea siguiente solo le pedieremos results
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  //Navegacion
function NavPage(props) {
  return (
    <>
      <header className="d-flex justify-content-between align-items-center">
        <p>Pagina : {props.page}</p>
        <button className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1)}
        >
          Pagina : {props.page + 1}
        </button>
      </header>
    </>
  )
}



  return (
    <div className="container">
    <NavPage page={page} setPage={setPage}/>
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
      <NavPage page={page} setPage={setPage}/>

    </div>
  );
}

export default CharacterList;
