import React, { useContext, useReducer, useState, useEffect } from 'react'
import './newList.scss'
import storage from '../../firebase.js'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createMovie, getMovies } from '../../context/movieContext/movieApiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { ListsContext } from '../../context/listContext/ListsContext';
import { createList } from '../../context/listContext/listsApiCalls';
import { useNavigate } from 'react-router-dom';

const INITIAL_STATE = {
    // title: null,
    // description: null,
    // year: null,
    // duration: null,
    // limit: null,
    // isSeries:null,
    // image: '',
    // imageTitle:'',
    // imageThumb:'',
    // trailer:'',
    // video:  '',
    // imageURL,
    // imageTitleURL,
    // imageThumbURL,
    // trailerURL,
    // videoURL
}

const Actions ={
    title: 'title',
    description: 'description',
    year: 'year',
    duration: 'duration',
    limit: 'limit',
    isSeries: 'isSeries',
    image: 'image',
    imageTitle: 'imageTitle',
    imageThumb: 'imageThumb',
    trailer: 'trailer',
    video: 'video',
    imageURL: 'imageURL',
    imageTitleURL: 'imageTitleURL',
    imageThumbURL: 'imageThumbURL',
    trailerURL: 'trailerURL',
    videoURL: 'videoURL'
}

const newProductReducer = (state, action) => {
    switch(action.type){
        case 'title':
            return {
                ...state,
                title: action.payload,
            }          
        case 'description':
            return {
                ...state,
                description: action.payload,
            }
        case 'year':
            return {
                ...state,
                year: action.payload,
            }          
        case 'duration':
            return {
                ...state,
                duration: action.payload,
            }          
        case 'limit':
            return {
                ...state,
                limit: action.payload,
            }          
        case 'isSeries':
            return {
                ...state,
                isSeries: action.payload,
            }        
        case 'image':
            // console.log('ab ')
            return {
                ...state,
                image: action.payload
        }        
        case 'imageTitle':
            return {
                ...state,
                imageTitle: action.payload
        }        
        case 'imageThumb':
            return {
                ...state,
                imageThumb: action.payload
        }        
        case 'trailer':
            return {
                ...state,
                trailer: action.payload
        }
        case 'video':
            return {
                ...state,
                video: action.payload,
        }
        // case 'urls':
        //     console.log(action.type)
        //     var urls_instant = {}
        //     urls_instant[`${action.type}`] = action.payload
        //     return {
        //         //...state,
        //         urls: {...urls_instant}
        //     }
        case 'imageURL':
            return {
                ...state,
                imageURL: action.payload
            }
        case 'imageTitleURL':
            return {
                ...state,
                imageTitleURL: action.payload
            }
        case 'imageThumbURL':
            return {
                ...state,
                imageThumbURL: action.payload
            }
        case 'trailerURL':
            return {
                ...state,
                trailerURL: action.payload
            }
        case 'videoURL':
            return {
                ...state,
                videoURL: action.payload
            }
        default:
            return{
                ...state
            }
        
    }
}

function NewList() {
    //we need to write a function
    //to check if the required states are filled
    const navigate = useNavigate()
    const [list, setList] = useState(null)

    //we will come back to ensure that one object can be uploaded
    // const [state, dispatch1] = useReducer(newProductReducer, INITIAL_STATE);

    const {dispatch: dispatchList} = useContext(ListsContext)
    const {movies, dispatch:dispatchMovie} = useContext(MovieContext)
    // console.log(movies)

    useEffect(() => {
        return () => {getMovies(dispatchMovie)};
        //used to fetch all the movies that we would
        //display in the select input option
      }, [dispatchMovie])

    // console.log(all_uploaded)
    // console.log(state)

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value ;
        const name = event.target.name;
        setList({...list, [name]:value})
        console.log(list)
    }

    const handleSelect = (event) => {
        // event.preventDefault()
        let name = event.target.name
        let targets = event.target.selectedOptions
        let value = Array.from(targets, (option) => option.value) 
        //returns an array of all selected option.value
        // console.log(targets)
        setList( {...list, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // const runValidityChecks = () => {
        //     // list.title && list.type && list.genre && (list.content > 0) && createList(list, dispatchList)
        // }
        if( list && list.title && list.type && list.genre && (list.content.length > 0) ){
            createList(list, dispatchList)
            navigate('/lists')
        }
        else{
            alert('Please fill in all fields and select at least 1 movie')
        }
    }
    
    console.log(list)

  return (
<div className='addProduct'>
        <h1 className='addProductTitle'>New List </h1>
        <form className='addProductForm'>
            <div className='column-1 file-inputs'>
                <div className='addProductItem'>
                    <label>Title </label >
                    <input type='text' className='fileInputImage' placeholder='e.g Comedy Movies' name='title' onChange={handleChange}/>
                </div>  
                <div className='addProductItem'>
                    <label>Type </label>
                    <select name='type' onChange={handleChange} className='addProductSelect'>
                        <option></option>
                        <option value='movie'>Movie</option>
                        <option value='series'>Series</option>
                    </select>
                </div>  
                <div className='addProductItem'>
                    <label>Genre </label >
                    <input type='text' className='fileInputImage' placeholder='genre e.g crime' name='genre'onChange={handleChange}/>
                </div>
            </div>
            <div className='column-2 text-inputs'>
                <div className='addProductItem content'>
                    <label>Content </label >
                    <select className='multi-select' multiple name='content' onChange={handleSelect}>
                        {
                            movies.map((movie, index) => (
                                <option value={movie._id} key={index}>{movie.title}</option>
                            ))
                        }
                    </select>
                </div>    
                <div className='buttonCompartment'>
                    <button className='addProductButton' onClick={handleSubmit}>Create</button>
                </div>
            </div>

        </form>
    </div>
  )
}

export default NewList