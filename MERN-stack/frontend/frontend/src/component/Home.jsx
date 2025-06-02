import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

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

export default function SearchAppBar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2004/viewData")
      .then((res) => {
      
        setData(res.data.record);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);

const handleDelete = (id) => {
  axios.delete(`http://localhost:2004/deleteData/${id}`)
    .then((res) => {
      console.log("Deleted successfully");
      setData((prev) => prev.filter((item) => item._id !== id));
    })
    .catch((err) => {
      console.log("Delete error:", err);
    });
};


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
            <Link to="/Form" style={{ textDecoration: 'none' }}>
              <button>Add Data</button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      {/* View List */}
      <div style={{ padding: '20px' }}>
        <h3>Data List</h3>
        <ul>
          {data.map((item, index) => <>
            <li key={index}>
              Name: {item.name}, Gerne: {item.gerne}
            </li>
            <button type='button' id="btn1" style={{width:"80px",backgroundColor:"red"}} onClick={()=> handleDelete(item._id)}>delete</button>
            <button id="btn1" style={{width:"80px",backgroundColor:"blue",marginLeft:"10px"}}>edit</button>
          </>)}
        </ul>
      </div>
    </>
  );
}
