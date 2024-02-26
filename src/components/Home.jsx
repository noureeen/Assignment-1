import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Home = () => {
  const [blog, setBlog] = useState([]);
  
  useEffect(() => {
    
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setBlog(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the blog posts:", error);
        });
    

  }, []);
  
  return (
    <div>

      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: 'red', fontFamily: 'sans-serif', fontSize: '25px' }}>ID</TableCell>
              <TableCell style={{ color: 'red', fontFamily: 'sans-serif', fontSize: '25px' }}>TITLE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blog.map((val, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.title}</TableCell>

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;