import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CartList({items}) {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: '1rem'}} >Item Name</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: '1rem'}} >Price</TableCell>            
            <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: '1rem'}} >Qty</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: '1rem'}} >Total</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow key={row.name} >                
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.price}</TableCell>             
              <TableCell align="left">{row.qty}</TableCell>              
              <TableCell align="left">{row.total}</TableCell>
              <TableCell align="left">D</TableCell>             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
