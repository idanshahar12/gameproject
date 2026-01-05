import React, { useMemo } from 'react'

const Carousel = ({ games, setCategory }) => {
  const genres = useMemo(() => {
    if (!games) return [];
    const allGenres = games.map((game) => game.genre);
    // console.log(allGenres);
    const newGenres = [...new Set(allGenres)];
    // console.log(newGenres);
    return newGenres;
  }, [games]);
  const chooseCategory  = (genre)=>{
    setCategory(genre);
    setLimit(game.length);
  };
  return (
    <section className="carousel">
      <div className="group">
        {genres.map((genre) => (
          <div className="genre-item" key={genre}
          onClick={()=>chooseCategory(genre)}
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="group" aria-hidden>
        {genres.map((genre) => (
          <div className="genre-item" key={genre}>
            {genre}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel