import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { counterService } from '../counterService';

export default function CartList() {

  const { order } = useSelector(state => state.counter);
  const { man } = useSelector(state => state.share);

  // const dispatch = useDispatch()

  // const deleteInvoice = async (item_id, id) => {
  //   const payload = {
  //     item_id: item_id,
  //     shop_id: man?.shop_id
  //   }
  //   const create = await counterService.deleteinvoice(payload, id , dispatch);
  //   if(create.status == 200){
  //       console.log(create)
  //   }
  // }

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
          {order?.invoices.map((row) => (
            <TableRow key={row.name} >                
              <TableCell align="left">{row?.item?.name}</TableCell>
              <TableCell align="left">{row?.item?.price}</TableCell>             
              <TableCell align="left">{row?.qty}</TableCell>              
              <TableCell align="left">{row?.total}</TableCell>
              <TableCell align="left" style={{ padding: 0 }} >
                <IconButton onClick={()=>deleteInvoice(row?.item?.id, row?.id)}>
                  <DeleteIcon style={{ color: 'red' }}/>
                </IconButton>
                </TableCell>             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
