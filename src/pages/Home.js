import React from "react";
import MovieList from "../component/MovieList";
import Search from "../component/search";

function Home() {
  return (
    <>
      <Search />
      <MovieList />
    </>
  );
}

export default Home;
