import Title from '../components/Title'
import Carousel from '../components/Carousel'
import GameList from '../components/GameList'
import React, { useEffect, useMemo, useState } from "react";
import { useFetchGames } from '../hooks/useFetchGames';
const HomePage = () => {
  const {games, isLoading, error} = useFetchGames();

  const [limit, setLimit] = useState(4);

  const [category,setCategory] = useState('');

  const filteredGames = useMemo(()=>{
    if(!category || category=='') return games;

    return games.filter((game)=>game.genre===category);
  },[category,games]);
  // console.log(games);
  if(isLoading){
    return<h1>LOADING...</h1>
  }
    if (error) {
      return <h1>Error:{error.message}</h1>;
    }

  const handleToggleGames = () => {
    if (category) {
      setCategory("");
      setLimit(4);
      return;
    }
    if (limit === games.length) {
      setLimit(4);
    } else {
      setLimit(games.length);
    }
  };
  return (
    <main className="center">
      <Title>Free Games!</Title>

      <Carousel games={games} setCategory={setCategory} />

      <GameList games={filteredGames} limit={limit} />
      {
      games && games.length > 4 && (
        <button onClick={handleToggleGames}>
          {category || limit !== games.length ? "Show all Games" : "Show Less"}
        </button>
      )}
    </main>
  );
}

export default HomePage