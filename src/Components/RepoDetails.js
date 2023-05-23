import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {setRepo } from '../Redux/Reducer'
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';



const RepoDetails = () => {
    const {id} = useParams()
   const repo= useSelector((state)=>state.repositories.repo)
   const dispatch=useDispatch()

    useEffect(() => {
      const fetchRepoDetails = async () => {
        try {
          const response = await axios.get(`https://api.github.com/repositories/${id}`);
          dispatch(setRepo(response.data));
        } catch (error) {
          console.error(error);
          dispatch(setRepo(null));
        }
      };
  
      fetchRepoDetails();
    }, [id]);
  
    if (!repo) {
      return <div>Loading repository details...</div>;
    }
  
    return (
      <div>
        <Card>
          <Card.Body>
          <Card.Title>{repo.full_name}</Card.Title>
          <Card.Img src={repo.owner.avatar_url} 
          alt={repo.full_name}
          style={{ width: '200px', height: '200px' }}
          />
          <ListGroup variant="flush">
            <ListGroup.Item>Description: {repo.description}</ListGroup.Item>
            <ListGroup.Item>Git URL: {repo.git_url}</ListGroup.Item>
            <ListGroup.Item>Stars: {repo.stargazers_count}</ListGroup.Item>
          
          </ListGroup>
        </Card.Body>
        </Card>
      </div>
    );
  };
  

export default RepoDetails