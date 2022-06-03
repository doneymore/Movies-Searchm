import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../styles";
import { getMovie } from "../redux/feature/movieSlice";

const Search = () => {
  const [name, setName] = useState("spider");
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    moviesList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));

  useEffect(() => {
    dispatch(getMovie(name));
  }, [name]);
  return (
    <>
      <h2 className={classes.title}>Movie Search App</h2>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullwidth
          value={name}
          sx={{ m: 1, width: "55ch" }}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p className={classes.error}>{error}</p>}
      </form>
    </>
  );
};

export default Search;
