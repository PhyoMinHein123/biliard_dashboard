import { Grid, Skeleton, Button, Paper, Tooltip, Typography } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import React from 'react';
import { endpoints } from '../../../constants/endpoints';

function ItemList({ data, loading }) {
  return (
    <Grid container spacing={2} sx={{ marginLeft: '1px' }}>
      {loading ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper style={{ textAlign: 'center', padding: '8px' }}>
              <img 
                src={item.image ? `${endpoints.image}${item.image}` : 'placeholder.jpg'}
                alt={item.name}
                style={{ height: 100, width: 100, objectFit: 'cover', borderRadius: '50%', margin: 'auto' }}
              />
              <Grid container>
                <Grid item xs={12}>
                  <Tooltip title={item.name}>
                    <Typography variant="subtitle1" gutterBottom>
                      {item.name.length > 7 ? `${item.name.slice(0, 7)}...` : item.name}
                    </Typography>
                  </Tooltip>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{`$${item.price}`}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<AddShoppingCartOutlinedIcon />}
                    sx={{
                      mt: 1,
                      '&:hover': {
                        backgroundColor: 'secondary.main',
                        color: '#fff',
                        cursor: 'pointer'
                      }
                    }}
                  >
                    Order
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default ItemList;
