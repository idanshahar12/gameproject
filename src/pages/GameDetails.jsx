import React from "react";
import { Link, useParams } from "react-router-dom";
import {useFetchGameById} from '../hooks/useFetchGameById'
import Title from '../components/Title'
const GameDetails = () => {
  const { gameId } = useParams();
  // console.log(gameId)
  const { game, isLoading, error } = useFetchGameById(gameId);
  // console.log(isLoading);
  // console.log(game);

  if (isLoading) {

    return <h1>LOADING...</h1>

  }

  if(error || !game){
    return <h1>Error loading game...</h1>;

  }

  return (
    <section>
      <div className="game-header">
        <Link to="/">⬅ Back to all games</Link>

        <Title>{game.title}</Title>

        <Link to={game.game_url} target="_blank">
          <button>Play Now!</button>
        </Link>
      </div>

      <div className="game-content">
        <div className="game-imgs">
          <img className="thumbnail" alt={game.title} src={game.thumbnail} />
          <div className="screenshots">
            {game.screenshots.map((i) => (
              <img key={i.id} alt={game.title + i.id} src={i.image} />
            ))}
          </div>
        </div>
        <div className="game-info">
          <h3>{game.description}</h3>

          <p>
            <b>Genre:</b>
            {game.genre}
          </p>
          <p>
            <b>Platform:</b>
            {game.platform}
          </p>
          <p>
            <b>Publisher:</b>
            {game.publisher}
          </p>
          <p>
            <b>Release Date:</b>
            {new Date(game.release_date).toLocaleDateString()}
          </p>

          {game.minimum_system_requirements && (
            <div className="minimum">
              <h2>Minimum System Requirements</h2>
              <p><b>OS:</b>{game.minimum_system_requirements.os}</p>
              <p><b>Graphic:</b>{game.minimum_system_requirements.graphics}</p>
              <p><b>memory:</b>{game.minimum_system_requirements.memory}</p>
              <p><b>Processor:</b>{game.minimum_system_requirements.processor}</p>
              <p><b>Storage:</b>{game.minimum_system_requirements.storage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  ); 
};
export default GameDetails;
