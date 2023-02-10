
import "./theme/index.css"
import {useTheme} from "./theme/useTheme";
import PokemonCard from "./components/PokemonCard";
import SkeletonCard from "./components/SkeletonCard"
import {useEffect, useState, useRef} from "react";
import {fetchPokemons} from "./api/fetchPokemons";
import {fetchPokemonByName} from "./api/fetchPokemonByName";
import InfiniteScroll from "react-infinite-scroll-component";
import { classNames, sortItems } from "./common/helper";


function App() {

  const { theme, toggleTheme } = useTheme()

  const [ pokemons, setPokemons] = useState([])

  const [currentPokemon, setCurrentPokemon ] = useState({})

  const [ sortBy, setSortBy ] = useState('')

  const [ pag, setPag] = useState({
    from: 1,
    till: 20,
  })

  const inputRef = useRef(null)
 
  useEffect(() => {
    submitPokemons()
  }, [])

  const submitPokemons = () => {
    fetchPokemons(pag.from, pag.till)
      .then((data) => {
      const newData = pokemons.concat(data) 
      setPokemons(newData)
      })
      .then((data) => {
        setPag(prev => ({from: prev.from + 20, till: prev.till + 20 }))
      })
  }

  const handleSearch = () => {
    fetchPokemonByName(inputRef.current.value)
      .then((data) => setCurrentPokemon(data))
  }

function handleSortWeight(e) {
  setSortBy(e.target.name)
}


  return (
    <div className={`app ${theme}`}>
      <input ref={inputRef} placeholder="search"/>
      <button className="btn" onClick={handleSearch}>Get Pokemon</button>
      <button className={classNames('active', sortBy === 'weight')} name='weight' onClick={handleSortWeight}>Самый большой</button>
      <button className={classNames('active', sortBy === 'attack')} name='attack' onClick={handleSortWeight}>Самый сильный</button>
      <div className={"flexCard"}>
        <PokemonCard data={currentPokemon}/>
        <InfiniteScroll 
        className={"flexCard"} 
        dataLength={pokemons.length}
        next={submitPokemons}
        hasMore={true}
        loader={<div className={"flexCard"}>
          {[...Array(20)].map((item) => <SkeletonCard/>)}
        </div>}
        >
          {sortItems(pokemons, sortBy).map((data, i) => 
            <PokemonCard key={i} data={data}/>
          )}

        </InfiniteScroll>
        
      </div>
      <button className='btn' onClick={toggleTheme}>Pokemons</button>
    </div>
  );
}

export default App;
