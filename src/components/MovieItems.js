import ReactStars from "react-rating-stars-component";

const MovieItem = ({ filtredMovies }) => {
  return (
    <div>
      {filtredMovies.map((movie) => {
        return (
          <div
            key={movie.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={movie.img}
              alt={movie.name}
              height="250px"
              width="180px"
            />
            <h4>{movie.name}</h4>
            <ReactStars
              value={movie.rating}
              size={32}
              edit={false}
              activeColor="#ffd700"
            />
            <br /> <br />
          </div>
        );
      })}
    </div>
  );
};

export default MovieItem;