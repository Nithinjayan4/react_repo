import React from 'react'
import { useParams } from 'react-router-dom'


const RepoDetails = () => {
    const {id} = useParams
  return (
    <div>
        <h2>Repository Details</h2>
        <p>Repository ID: {id}</p>
        {/* {more information} */}
    </div>
  )
}

export default RepoDetails