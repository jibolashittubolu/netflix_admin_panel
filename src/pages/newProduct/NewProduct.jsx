import React, { useContext, useReducer, useState } from 'react'
import './newProduct.scss'
import storage from '../../firebase.js'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createMovie } from '../../context/movieContext/movieApiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';

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

function NewProduct() {
    //we will come back to ensure that one object can be uploaded
    const [state, dispatch1] = useReducer(newProductReducer, INITIAL_STATE);

    const {dispatch} = useContext(MovieContext)

    function isAllUploaded(){
        //checks if we have completed uploads
        var all_uploaded = ((state.imageURL && state.imageTitleURL && state.imageThumbURL && state.trailerURL && state.videoURL) && true) ? true : false

        return all_uploaded
    }

    function uploadedCountChecker(){
        //checks the number of uploaded files
        var uploadedCount = 0;
        state.imageURL && uploadedCount++
        state.imageTitleURL && uploadedCount++
        state.imageThumbURL && uploadedCount++
        state.trailerURL && uploadedCount++
        state.videoURL && uploadedCount++

        return uploadedCount
    }


    // console.log(all_uploaded)
    // console.log(state)

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value ;
        const file = event.target.files && event.target.files[0] ;
        //pathname for a file can be derived from the event.target.value of the said input
        const name = event.target.name;
        dispatch1({
                type:Actions[`${name}`], payload:file || value 
            })
        console.log(state)
    }

    //a nasty behaviour I encountered was that when you fill only the first input and keep hitting the upload button
    // the uploaded state increase and an undefined object is sent to the backend.
    //I have not investigated why
    //but one reason is because at handleUpload, the remaining states are null and it test the next one which returns undefined then goes and breaks
    //Then again but since undefined !== undefined, it registers
    //but we can abate this by checking if all the inputs are filled before allowing a create (if all is required)
    //or if the remaining are not required we can initialize them with an empty string '' in the initial state object
    const upload = (items) => {
        items.forEach((item) => {
            const file_name = new Date().getTime() + item.label + item.file.name
            const storageRef = ref(storage, `/items/${file_name}` )
            const uploadTask = uploadBytesResumable(storageRef, item.file,)
            // console.log(item.file.name);
            //!add metadata
            // uploadTask.cancel()

            //to prevent recurrence, we should check the db for the occurrence of the element

            uploadTask.on(
                "state_changed", 
                (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + " %done." );
                },
                (err) => {console.log(err)},
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then( (downloadURL) =>  {
                        // dispatch1( {type:Actions[`${item.label}`], payload:downloadURL} );
                        dispatch1( {type:Actions[`${item.label}URL`], payload:downloadURL} );
                    console.log(downloadURL)}
                    )
                }
            )
        });
    }

    function filterFileStates(all_states){
        var {title, description, year, duration, limit, isSeries, ...required_data} = all_states;
        //will only return the file states that have an available property
        //so that we do not pass an undefined array element
      
        var store = []
        for (let i in required_data){
          store.push({file:required_data[i],label:i, label_alt: i+'URL'})
        }
      
        return store
    }

    //return the state but strip off the ones 
    //wey we no want
    const handleUpload = (e) => {
        e.preventDefault();
        const available_states = filterFileStates(state)
        if (available_states.length < 5){
            return alert('Please add the required files in the boxes')
        }
        // console.log(available_states)
        upload(available_states)
 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isAllUploaded()){
            return alert('Please add all files and click the upload button before proceeding')
        }
        createMovie(state, dispatch)
    }    

  return (
<div className='addProduct'>
        <h1 className='addProductTitle'>New Movie </h1>
        <form className='addProductForm'>
            <div className='column-1 file-inputs'>
                <div className='addProductItem'>
                    <label>Image </label >
                    <input type='file' id='image' className='fileInputImage-n' name='image' onChange={handleChange}/>
                </div>            
                <div className='addProductItem'>
                    <label>Title Image </label >
                    <input type='file' id='imageTitle' className='fileInputImage-n' name='imageTitle'
                    onChange={handleChange} 
                    />
                </div>  
                <div className='addProductItem'>
                    <label>Thumbnail Image </label >
                    <input type='file' id='imageThumb' className='fileInputImage-n' name='imageThumb'
                    onChange={handleChange} />
                </div>
                <div className='addProductItem'>
                    <label>Trailer</label >
                    <input type='file'  className='fileInputImage-n' name='trailer'
                    onChange={handleChange} />
                </div>  
                <div className='addProductItem'>
                    <label>Video </label >
                    <input type='file' className='fileInputImage-n' name='video'
                    onChange={handleChange} />
                </div> 
            </div>
            <div className='column-2 text-inputs'>
                <div className='addProductItem'>
                    <label>Title </label >
                    <input type='text' className='fileInputImage' placeholder='e.g John Wick 2' name='title' onChange={handleChange}/>
                </div>  
                <div className='addProductItem'>
                    <label>Description </label >
                    <input type='text' className='fileInputImage' placeholder='description' name='description' onChange={handleChange}/>
                </div>  
                <div className='addProductItem'>
                    <label>Year </label >
                    <input type='text' className='fileInputImage' placeholder='year' name='year'onChange={handleChange}/>
                </div>  
                <div className='addProductItem'>
                    <label>Duration </label >
                    <input type='text' className='fileInputImage' placeholder='duration' name='duration'onChange={handleChange}/>
                </div>  
                <div className='addProductItem'>
                    <label>Limit </label >
                    <input type='text' className='fileInputImage' placeholder='limit' name='limit' onChange={handleChange}/>
                </div>  
                <div className='addProductItem'>
                    <label>Is Series?</label>
                    <select className='addProductSelect' name='isSeries' id='isSeries' onChange={handleChange}>
                        {/* <option> </option> */}
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>
                <div className='buttonCompartment'>
                    <button className='addProductButton' onClick={handleSubmit}>Create</button>
                    
                    {
                        //uploaded !== 5 && 
                        !isAllUploaded() &&
                        <>
                            <button className='addProductButton' onClick={handleUpload}>Upload</button>
                            <button disabled={true}className='addProductButton pending' > Warning{'! '}{uploadedCountChecker()} of 5 files uploaded
                            </button>
                        </>
                    }
                    {
                        //uploaded === 5 &&
                        isAllUploaded() &&
                        <button disabled={true} className='addProductButton success' >5 of 5 files uploaded
                        </button>
                    }
                </div>
            </div>

        </form>
    </div>
  )
}

export default NewProduct