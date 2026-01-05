import React from 'react'
import GamePreview from './GamePreview'

const GameList = ({games,limit}) => {
  return (
    <section>
      <div className='game-list'>
        {
          games.map((game, index) => (
            index < limit &&
            <GamePreview key={game.id} game={game}>
              {game.title}
            </GamePreview>
          ))
        }
      </div>
    </section>
  )
}

export default GameList