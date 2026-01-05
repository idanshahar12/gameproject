import React from 'react'
import { Link } from 'react-router-dom';

const GamePreview = ({game}) => {
  return (
    <Link className="figure" to={'/game/'+game.id}>
      <figure>
        <p>{game.title}</p>
        <img alt={game.title} src={game.thumbnail} />
        <p>{game.short_description}</p>
      </figure>
    </Link>
  );
}

export default GamePreview