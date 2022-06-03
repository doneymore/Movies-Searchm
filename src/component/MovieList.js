import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MovieList() {
  const moveList = useSelector((state) => state.movie);
  console.log(moveList, "showMovieList");
  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {/* {moveList?.forEach((val)=> val.moviesList?.map((vals, index) => vals.search))} */}
            {/* {moveList.search.map((item, index) => (
              <Grid key={index} item>
                <Card sx={{ maxWidth: "350" }}>
                  <Link to={`/movie/${item.imdbID}`}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={item.Poster}
                      alt={item.Title}
                    />
                    <CardContent>
                      <Typography variant="body2">{item.title}</Typography>
                      <Typography variant="body2">({item.Year})</Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))} */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MovieList;
