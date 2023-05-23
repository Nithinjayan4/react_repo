import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setRepositories } from '../Redux/Reducer';

const SearchForm = ({onSearch}) => {
    const [query, SetQuery] = useState('')
    const dispatch=useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.get(
                `https://api.github.com/search/repositories?q=${query}`
            );
            dispatch(setRepositories(response.data.items));

        }catch(err){
            console.err(err)
          dispatch(setRepositories(([])))
        }
    }

    


  return (
    <div className='mt-4 mb-4'>
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
            <input
            type='text'
            className='form-control'
            value={query}
            onChange={(e)=> SetQuery(e.target.value)}
            placeholder='Enter a Search repo..'
            />
            <button type='submit' className='btn btn-primary'> Search</button>
            </div>


        </form>
        
       
    </div>
  )
}


export default SearchForm