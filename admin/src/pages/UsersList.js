import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const UsersList = () => {

  //Remove comments when connected to backend

  // const [rows, setRows] = useState();

  // useEffect(()=>{
  //    axios.get('http://localhost:5000/admin/users').then((data)=> setRows(data))
  // })

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(userId, name, mobile, email, homeAddress, city, rewards) {
        return { userId, name, mobile, email, homeAddress, city, rewards };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'dsf', 'fdd'),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'dsf', 'fdd'),
        createData('Eclair', 262, 16.0, 24, 6.0, 'dsf', 'fdd'),
        createData('Cupcake', 305, 3.7, 67, 4.3, 'dsf', 'fdd'),
        createData('Gingerbread', 356, 16.0, 49, 3.9, 'dsf', 'fdd'),
      ];
      
      
  return (
    <div style={{width:'60%', margin:'10px auto 0px auto'}}>
   
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Mobile</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Home address</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Rewards</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row) => (
            <StyledTableRow key={row.userId}>
            <StyledTableCell component="th" scope="row">{row.userId}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.mobile}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.homeAddress}</StyledTableCell>
              <StyledTableCell align="right">{row.city}</StyledTableCell>
              <StyledTableCell align="right">{row.rewards}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default UsersList