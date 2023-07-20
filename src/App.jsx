import { useEffect, useState } from 'react'

function App() {

  const [character, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json();
      //console.log(data); El arreglo por medio de console log nos muestra un objeto con dos propiedades info y results, en la linea siguiente solo le pedieremos results
      setCharacters(data.results); 
    }

    fetchData();
  }, []);


  return (
    <div>
      <h1>Rick and Morty</h1>
      {
        character.map(character => {
          return(
            <div key={character.id}>
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
            </div>
          )
        })
      }
    </div>
  )
}

export default App