import React from 'react'
import {  useDispatch } from "react-redux";
import { changePage } from '../action/action'
export const LoadMore = () => {
  
    const dispatch = useDispatch();
    const handleLoad = ()=>{
        dispatch(changePage())
    }
    return (
        <div className='load-more'>
            <button className="load-btn btn" onClick={handleLoad}>Load More</button>
        </div>
    )
}
