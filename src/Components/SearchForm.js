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
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={query}
            onChange={(e)=> SetQuery(e.target.value)}
            placeholder='Enter a Search repo..'
            />
            <button type='submit'> Search</button>


        </form>
        
       
    </div>
  )
}


export default SearchForm