import React, { useState } from 'react'
import SearchForm from './SearchForm';
import ReportList from './ReportList';
import { useDispatch, useSelector } from 'react-redux';
import { setRepositories,setCurrentPage } from '../Redux/Reducer';



const Home  = () => {
  const repositories = useSelector((state)=>state.repositories.repos);
 
   const dispatch= useDispatch()
 
  const currentPage= useSelector ((state)=>state.repositories.currentPage);
  
  const handleSearch =(results)=>{
   dispatch (setRepositories(results));
  }
   const handlePageChange =(page)=>{
    dispatch(setCurrentPage(page));
   }
  return (

   
    <div className='container'>
      <h1 className='mt-5 mb-4'>Git Repository Search </h1>
     
      
        
      <SearchForm onSearch={handleSearch} />
      {repositories.length > 0 ? (
        <ReportList 
       
        onPageChange={handlePageChange}
        
        />
      ) : (
        <p>No repositories found.</p>
      )}
     
       </div>
      
  )
}

export default Home 