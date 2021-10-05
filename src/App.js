import { useState } from "react";

import Nav from "./components/Nav";
import MovieContainer from "./components/MovieContainer";
import AddMovie from "./components/AddMovie";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: "2525252",
      img: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/91mobubtvel-sl1500.jpg?itok=FPX_Vc2l",
      name: "The Giver",
      rating: 3,
    },
  
    {
      id: "63",
      img: "https://i.pinimg.com/236x/cd/63/5a/cd635a4ec02a4eda8dd1e94f8da5df9b.jpg",
      name: "Guardian of the galaxy",
      rating: 5,
    },

    {
      id: "85",
      img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
      name: "Avatar",
      rating: 2,
    },

    {
      id: "41",
      img: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
      name: "Batman",
      rating: 5,
    },
    {
      id: "55",
      img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
      name: "Deadpool 2",
      rating: 4,
    },
    {
      id: "9693",
      img: "https://a.ltrbxd.com/resized/sm/upload/1i/ou/un/hh/three%20robots-0-230-0-345-crop.jpg?k=e6e58dd1e3",
      name: "Love Death & Robots",
      rating: 3,
    },
    {
      id: "456",
      img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      name: "Vikings",
      rating: 1,
    },
  ]);

  const [input, setInput] = useState("");

  const [rating, setRating] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    img: "",
    name: "",
    rating: 1,
  });

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNewMovie = (e) => {
    if (e.target.name === "rating") {
      setNewMovie({ ...newMovie, [e.target.name]: +e.target.value });
    } else {
      setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    }
  };

  const handleAddMovie = () => {
    if (newMovie.rating >= 1 && newMovie.rating <= 5) {
      setMovies([...movies, newMovie]);
      handleIsOpen();
    } else {
      alert("Movie rating should be between 1 and 5.");
    }
  };

  console.log(movies);

  return (
    <div className="App">
      <Nav
        rating={rating}
        handleRating={handleRating}
        input={input}
        handleInput={handleInput}
        handleIsOpen={handleIsOpen}
      />
      <br />
      <br />
      <AddMovie
        isOpen={isOpen}
        handleIsOpen={handleIsOpen}
        newMovie={newMovie}
        handleNewMovie={handleNewMovie}
        handleAddMovie={handleAddMovie}
      />
      <MovieContainer movies={movies} rating={rating} input={input} />
    </div>
  );
}

export default App;
