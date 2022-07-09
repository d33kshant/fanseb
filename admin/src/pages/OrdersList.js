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


const OrdersList = () => {

  //uncomment this when using backend

  // const [rows, setRows] = useState();

  // useEffect(()=>{
  //    axios.get('http://localhost:5000/admin/orders').then((data)=> setRows(data))
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

      function createData(orderId, orderName, customerId, customerName, shippingAddress, status) {
        return { orderId, orderName, customerId, customerName, shippingAddress, status };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'dsf'),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'dsf'),
        createData('Eclair', 262, 16.0, 24, 6.0, 'dsf'),
        createData('Cupcake', 305, 3.7, 67, 4.3, 'dsf'),
        createData('Gingerbread', 356, 16.0, 49, 3.9, 'dsf'),
      ];
      
      
  return (
    <div style={{width:'60%', margin:'10px auto 0px auto'}}>
   
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell align="right">Order Name</StyledTableCell>
            <StyledTableCell align="right">Customer Id</StyledTableCell>
            <StyledTableCell align="right">Customer name</StyledTableCell>
            <StyledTableCell align="right">Shipping address</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row) => (
            <StyledTableRow key={row.orderId}>
              <StyledTableCell component="th" scope="row">{row.orderId}</StyledTableCell>
              <StyledTableCell align="right">{row.orderName}</StyledTableCell>
              <StyledTableCell align="right">{row.customerId}</StyledTableCell>
              <StyledTableCell align="right">{row.customerName}</StyledTableCell>
              <StyledTableCell align="right">{row.shippingAddress}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default OrdersList