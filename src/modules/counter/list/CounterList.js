import { useCallback, useEffect, useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Breadcrumb } from '../../../shares/Breadcrumbs'
import { counterService } from '../counterService';
import { useDispatch, useSelector } from 'react-redux';
import { setPaginate } from '../counterSlice';
import { getData } from '../../../helpers/localstorage';
import { keys } from '../../../constants/config';

export const CounterList = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true)
  const { tables, paginateParams } = useSelector((state) => state.counter);
  const [shopId, setShopId] = useState(null)

  const loadingData = useCallback(async () => {
    if(!loading){
      const result = await counterService.tables(dispatch, paginateParams);
      if(result.status === 200){
        console.log(result.data.data)
      }
    }
  }, [dispatch, loading]);

  useEffect(() => {
      loadingData();
  }, [loadingData]);


  useEffect(()=>{
    if(shopId !== null){
      dispatch(
        setPaginate({
            ...paginateParams,
            filter: "shop_id",
            value: `${shopId}`,
        }))
        setLoading(false)
    }
  },[shopId])

  useEffect(()=>{
    const data = getData(keys.USER)
    setShopId(data.shop_id)
  },[])


  return (
    <div>
      <Breadcrumb />

      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="space-around" spacing={3}>
          {tables.map((value) => (
            <Grid key={value} item >
              <Paper
                sx={{
                  height: 180,
                  width: 150,
                  backgroundColor: () =>
                    value.status === 'SUCCESS' ? '#00D13B' : '#E00E0E',
                }}
              >
                <Typography variant='h5' >{value.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

    </div>
  );
};


