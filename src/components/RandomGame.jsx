import React,{useMemo} from 'react'
import { useFetchGames } from "../hooks/useFetchGames";
import { Link, useNavigate } from "react-router-dom";

const RandomGame = () => {

  const {games, isLoading, error} = useFetchGames();
  const navigate = useNavigate();

    const ids = useMemo(() => {
      if (!games) return [];
      const allIds = games.map((game) => game.id);
      return allIds;
    }, [games]);


    const randomGame = () =>{
        const randomNumber = Math.floor(Math.random()*ids.length)
        navigate(`/game/${ids[randomNumber]}`);
        
    }
      if (isLoading) {
        return <h1>LOADING...</h1>;
      }
      if (error) {
        return <h1>Error:{error.message}</h1>;
      }
  return (
    
      <p onClick={randomGame} className='pointer'>
        <a>Random Game!🎲</a>
      </p>
    
  );
}

export default RandomGame