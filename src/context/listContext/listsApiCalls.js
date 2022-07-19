import { getListsStart, getListsSuccess, getListsFailure, deleteListStart, deleteListSuccess, deleteListFailure, createListStart, createListSuccess, createListFailure } from "./ListsActions"
import axios from 'axios'

export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try{
        const res = await axios.get(
            "/lists", 
            { headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }}
        )
        dispatch(getListsSuccess(res.data));
    }
    catch(err){
        dispatch(getListsFailure())
    }
}

export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try{
        const res = await axios.post(
            "/lists/create" ,
            list, 
            { headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }}
        )
        dispatch(createListSuccess(res.data));
    }
    catch(err){
        dispatch(createListFailure())
    }
}
  


export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try{
        await axios.delete(
            "/lists/" + id, 
            { headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }}
        )
        dispatch(deleteListSuccess(id));
    }
    catch(err){
        dispatch(deleteListFailure())
    }
}