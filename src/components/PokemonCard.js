import "../theme/index.css"

const PokemonCard = ({data}) => {

  if (!data.hasOwnProperty('name')) {
    return 
  }


  return(
    <div className='pokemonCard'>
      <img className="image" src={data.sprites.other.dream_world.front_default} alt='icon'/>
      <h1 className="title">{data.name}</h1>
      <div className="flex-stat">
        {data.stats.map((item, i) =>
          <div key={i} className='flex-item'>
            <span>{item.stat.name}: </span>
            <span>{item.base_stat}</span>
          </div>
         )}
      </div>
    </div>
  )
}
export default PokemonCard