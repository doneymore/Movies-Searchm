import { takeLatest, fork, put, call } from "redux-saga/effects";
import { setMovies, getMovie } from "./feature/movieSlice";
import { fetchMovies } from "./api";

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovie.type, onLoadMoviesAsync);
}

export const moviesSagas = [fork(onLoadMovies)];
