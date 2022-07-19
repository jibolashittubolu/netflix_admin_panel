import { deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess, createMovieStart, createMovieSuccess, createMovieFailure } from "./MoveActions"
import axios from 'axios'

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try{
        const res = await axios.get(
            "/movies", 
            { headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }}
        )
        dispatch(getMoviesSuccess(res.data));
    }
    catch(err){
        dispatch(getMoviesFailure())
    }
}

export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    const cleanMovieData = () => {
        movie.image = movie.imageURL;
        movie.imageTitle = movie.imageTitleURL;
        movie.imageThumb = movie.imageThumbURL;
        movie.trailer = movie.trailerURL;
        movie.video = movie.videoURL;

        const {imageURL, imageTitleURL, imageThumbURL, trailerURL, videoURL, ...required_movie_object} = movie

        console.log(required_movie_object)
        return required_movie_object
    }
    try{
        const res = await axios.post(
            "/movies/create" ,
            cleanMovieData(), 
            { headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }}
        )
        dispatch(createMovieSuccess(res.data));
    }
    catch(err){
        dispatch(createMovieFailure())
    }
}



export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try{
        await axios.delete(
            "/movies/" + id, 
            { headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }}
        )
        dispatch(deleteMovieSuccess(id));
    }
    catch(err){
        dispatch(deleteMovieFailure())
    }
}