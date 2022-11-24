import React from "react";

//Components
import Characters from "./components/Characters"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CharacterCard from "./components/CharacterCard"
import Footer from "./components/Footer"

//Hooks
import { useEffect, useState } from "react"



function App() {
  
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);
  let url = 'https://rickandmortyapi.com/api/character?page=6';

  const fetchCharacters = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setCharacters(data.results);
  }

  /*const ejemplo = [{image:"", name:"Carlos", status:"Alive", species:"Human", gender:"Male"},
  {image:"", name:"Silvana", status:"Alive", species:"Human", gender:"Male"},
  {image:"", name:"Julian", status:"Alive", species:"Human", gender:"Male"}]*/
  

  useEffect(() => {
    fetchCharacters();
  }, []);

  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-container">
          {characters.map(item =>   
          <CharacterCard
            key={item.id}
            image={item.image}
            name={item.name}
            status={item.status}
            species={item.species}
            gender={item.gender} />  
          )}   
      </div>

      <Footer />
    </div>
  )
}

export default App
