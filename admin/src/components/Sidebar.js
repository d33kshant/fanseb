import React from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';
import { Card, Box, Tooltip} from '@mui/material';

const Sidebar = () => {
  return (
    <Box
      style={{
        width: '20%',
        height: '97vh',
        border: '1px solid grey',
        margin: 10,
        borderRadius:10,
        background: 'rgb(4,4,4)',
        background: 'linear-gradient(121deg, rgba(4,4,4,1) 35%, rgba(83,80,83,1) 69%, rgba(121,119,119,1) 100%)'
      }}
      sx={{boxShadow:3}}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{color: 'white'}}>Admin</h1>
      </Box>

      <Box 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color:'white',
          fontSize: 25,
        }}
      >
        <Box>
          <Box style={{padding: 20}} className="list-item">
            <Link to="/users-list" style={{ textDecoration: 'none', color:'inherit'}}>
              Users List
            </Link>
          </Box>

          <Box style={{padding: 20}} className="list-item">
            <Link to="/orders-list" style={{ textDecoration: 'none', color:'inherit' }}>
              Orders List
            </Link>
          </Box>

          <Box style={{padding: 20}} className="list-item">
            <Link to="/brands-list" style={{ textDecoration: 'none', color:'inherit' }}>
              Brands List
            </Link>
          </Box>

          <Box style={{padding: 20}} className="list-item">
            <Link to="/influencers-list" style={{ textDecoration: 'none', color:'inherit' }}>
              Influencers List
            </Link>
          </Box>

          <Box style={{padding: 20}} className="list-item">
            <Link to="/products-list" style={{ textDecoration: 'none', color:'inherit' }}>
              Products List
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
