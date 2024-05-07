import {Box, Modal, Typography, Card, CardMedia, CardContent,  Button, ButtonGroup, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProductModal( props ) {

  const { open, onClose, data, count, SetCount, createOrder } = props

  const handleIncrement = () => {if (count < data.qty || data.qty == null) {SetCount(count + 1)}};
  const handleDecrement = () => {if (count > 1) {SetCount(count - 1)}};

  useEffect(()=>{

  },[{data}])
  
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={onClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
            <Card variant="outlined">
                <CardMedia
                    component="img"
                    height="270"
                    image={data.image}
                    alt="Paella dish"
                />
                <CardContent style={{ textAlign: 'center' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h4" gutterBottom >{data.name}</Typography>    
                            </Grid>
                            <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom >{data.price} MMK</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <ButtonGroup
                                    disableElevation
                                    aria-label="Disabled elevation buttons"
                                    >
                                    <Button variant="contained" onClick={handleDecrement}>-</Button>
                                    <Button variant="outlined" style={{color:'black'}} disabled={true}>{count}</Button>
                                    <Button variant="contained" onClick={handleIncrement}>+</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<ShoppingCartIcon />}
                                    onClick={createOrder}
                                >
                                Order
                                </Button>
                            </Grid>
                        </Grid>
                </CardContent>
            </Card>
        </Box>
      </Modal>
    </div>
  );
}