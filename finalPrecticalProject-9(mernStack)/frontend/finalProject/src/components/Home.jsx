import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function  Home()  {

  const [data,setData] = useState([])

    axios.get("http://localhost:2004/getData").then((res)=>{
        console.log(res.data);
        setData(res.data); 
        
    })
    .catch((err)=>{
        console.log(err);
        
    })

  return (
  <>
  
    <Box sx={{ flexGrow: 1 }} >
      <AppBar  style={{width:"100%"}}>
        <Toolbar >
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
       <Link to="/addData">
          <button id='btn1' style={{height:"35px",width:"100px",borderRadius:"5px" , border:"none" , color:"black" , backgroundColor:"white"}}>Add+</button>
       </Link>
        </Toolbar>
      </AppBar>
    </Box>

     {data.length === 0 ? (
          <Typography>No data available</Typography>
        ) : (
          data.map((item, index) => (
            <Box key={index} sx={{ marginBottom: 2, padding: 2, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <Typography variant="h6">Name: {item.name}</Typography>
              <Typography>Genre: {item.gerne}</Typography>
              <Typography>Year: {item.year}</Typography>
            </Box>
          ))
        )}
  </>
    
  );
}
