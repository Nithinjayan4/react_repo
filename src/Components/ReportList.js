import React  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
 import { setFilter,setSort } from '../Redux/Reducer';
import { Table } from 'react-bootstrap';


const ReportList = ( {onPageChange}) => {
  const repositories = useSelector((state)=>state.repositories.repos);
   const currentPage = useSelector((state)=>state.repositories.currentPage);
   const filter = useSelector((state)=>state.repositories.filter);
   const sort = useSelector((state)=>state.repositories.sort);
 
 const dispatch =useDispatch();
 




  const handlePageClick= (page) =>{
    onPageChange(page);
  }
  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };
  const filteredRepositories = repositories.filter(repo =>
    repo.full_name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedRepositories = [...filteredRepositories].sort((a, b) => {
    if (sort === 'ascName') {
      return a.full_name.localeCompare(b.full_name);
    }
    if (sort === 'descName') {
      return b.full_name.localeCompare(a.full_name);
    }


    if (sort === 'ascStars') {
      return a.stargazers_count - b.stargazers_count;
    }
    
    if (sort === 'descStars') {
      return b.stargazers_count - a.stargazers_count;
    }
    return 0;
  });

  const itemsPerPage =10;
  const startIndex = (currentPage - 1)* itemsPerPage;

  

  const pageinatedRepositories = sortedRepositories.slice(
    startIndex,
    startIndex + itemsPerPage
  )
  const totalPages =Math.ceil(sortedRepositories.length/itemsPerPage)


  
   
  return (
    <div>
      <div className='mb-3'>
        <label htmlFor="filter" className='form-label fw-bold ' style={{ width: '80px' }}>Filter:</label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="form-control"
          placeholder="Enter a search term..."
        />
      </div>
      <div className='mb-3'>
        <label htmlFor="sort" className='form-label fw-bold' style={{ width: '80px' }}>Sort by:</label>
        <select id="sort" value={sort} onChange={handleSortChange}  className="form-select">
          <option value="">None</option>
          <option value="ascName">Name (A-Z)</option>
          <option value="descName">Name (Z-A)</option>
          <option value="ascStars"> Lowest Stars</option>
          <option value="descStars"> Highest Stars</option>
        </select>
      </div>
      <Table striped bordered hover>
      <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
      {pageinatedRepositories.length> 0 ?  pageinatedRepositories.map((repo)=>(
      <tr key={repo.id}>
        <td>
        <Link to={`/repo/${repo.id}`}>{repo.full_name}</Link>

        </td>
        <td>{repo.description}</td>
        <td>{repo.stargazers_count}</td>
       

      </tr>
    )) : <tr><td colSpan="3"> No Repository found. </td></tr> }

      </tbody>

      </Table>
      
  
  <div>
    {Array.from({length: totalPages},(_,index)=>index+1).map(
    (page)=>(
      <button 
      key={page}
      onClick={()=>handlePageClick(page)}
      disabled={currentPage === page}
      className='btn btn-primary me-1'
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