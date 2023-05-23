import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// port {setCurrentPage} from '../Redux/Reducer'im
import { Link } from 'react-router-dom';
// import { setRepositories } from '../Redux/Reducer';


const ReportList = ( {onPageChange,currentPage}) => {
  const repositories = useSelector((state)=>state.repositories);
  // const currentPage = useSelector((state)=>state.currentPage);
  console.log(repositories);
//  const dispatch =useDispatch();
 
//  dispatch(setRepositories(page));

  const itemsPerPage =10;
  const startIndex = (currentPage - 1)* itemsPerPage;
console.log('startindex',startIndex)
  console.log("repos",repositories.slice(
    0,10))

  const pageinatedRepositories = repositories.slice(
    startIndex,
    startIndex + itemsPerPage
  )
  const totalPages =Math.ceil(repositories.length/itemsPerPage)

  const handlePageClick= (page) =>{
    onPageChange(page);
  }
  
  console.log(pageinatedRepositories,'paginated')
  return (
    <div>
  <ul>
    {pageinatedRepositories.map((repo)=>(
      <li key={repo.id}>
        <Link to={`/repo/${repo.id}`}>{repo.full_name}</Link>

      </li>
    ))}

    {/* {repo
    sitories.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.full_name}
          </a>
        </li>
      ))} */}
  </ul>
  <div>
    {Array.from({length: totalPages},(_,index)=>index+1).map(
    (page)=>(
      <button 
      key={page}
      onClick={()=>handlePageClick(page)}
      disabled={currentPage === page}
      >
        {page}

      </button>
    )
    )
    }
  </div>
  </div>
  )
}

export default ReportList