import { Grid, Skeleton } from '@mui/material'
import React from 'react'

function ItemList({data}) {
    
  return (
    <Grid container spacing={2} sx={{ marginLeft: '1px' }}>
        {data.map((item, index) => (
            <Grid item xs={4} key={index}>
                <Skeleton variant="rect" width={140} height={160} />
            </Grid>
        ))}
    </Grid>   
  )
}

export default ItemList
