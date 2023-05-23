import React, { useState } from 'react'
import SearchForm from './SearchForm';
import ReportList from './ReportList';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setRepositories } from '../Redux/Reducer';


const Home  = () => {
  const repositories = useSelector((state)=>state.repositories);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch =(results)=>{
    setRepositories(results);
  }
   const handlePageChange =(page)=>{
    setCurrentPage(page);
   }
  return (

   
    <div>
      <h1>Git Repository Search </h1>
      <Link to="/" >Home</Link>
      
        
      <SearchForm onSearch={handleSearch} />
      {repositories.length > 0 ? (
        <ReportList 
        repositories={repositories}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        
        />
      ) : (
        <p>No repositories found.</p>
      )}
     
       </div>
      
  )
}

export default Home 