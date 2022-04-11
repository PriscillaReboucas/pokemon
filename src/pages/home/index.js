import CardList from "../../components/Card/CardList";
import CardContainer from "../../components/Card/CardContainer";
import { useState, useEffect } from "react";
import * as pokeapi from "../../repositories/pokeapi";
import InputDesign from "../../components/inputDesign/inputDesign";


function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPokemons, setLoadedPokemons] = useState([]);
  const [search, setSearch] = useState('');
   
  useEffect(() => {
    setIsLoading(true);
    pokeapi.retrieve().then((data) => {
      setIsLoading(false);
      setLoadedPokemons(data.results);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const getInputValue = (event) => {
    const userValue = event.target.value;
    setSearch(userValue)
  }

  const filteredPokemons = loadedPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <section>
      <InputDesign getInputValue={getInputValue}/>
      <CardContainer>
        <CardList pokemons={filteredPokemons} />
      </CardContainer>
    </section>
  );
}

export default Home;
