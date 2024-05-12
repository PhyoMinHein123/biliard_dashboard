import { useCallback, useEffect, useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Breadcrumb } from '../../../shares/Breadcrumbs'
import { counterService } from '../counterService';
import { useDispatch, useSelector } from 'react-redux';
import { setPaginate } from '../counterSlice';
import { getData } from '../../../helpers/localstorage';
import { keys } from '../../../constants/config';
import AlertCounter from '../component/AlertCounter';
import { alertCounterToggle } from '../../../shares/shareSlice';
import SkeletonCounter from '../../../shares/SkeletonCounter';
import { counterPayload } from '../counterPayload';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';

export const CounterList = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true)
  const [packageData, setPackageData] = useState([])
  const { tables, paginateParams } = useSelector((state) => state.counter);
  const { man } = useSelector((state) => state.share );
  const [shopId, setShopId] = useState(null)
  const [selectTable, setSelectTable] = useState(null)

  const loadingData = useCallback(async () => {
    if(!loading){
      await counterService.tables(dispatch, paginateParams);

      // const result = await counterService.package(dispatch);
      // if(result.status === 200){
      //   setPackageData(result.data)
      // }
    }
  }, [dispatch, loading]);

  const submitOrder = async () => {
    setLoading(true);
    const payload = { 
      table_number_id: selectTable,
      status: "PENDING", 
      shop_id: shopId
    }
    const create = await counterService.checkin(payload, dispatch);
    if(create.status == 200){
        navigate(`${paths.counter}/${selectTable}`);
    }
    setLoading(false);
  };

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
    if(Object.keys(man)?.length !== 0){
      setShopId(man.shop_id)
    }
  },[man])

  const formatTime12Hour = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <div>
      <Breadcrumb />

      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="space-around" spacing={3}>
          {loading ? (<SkeletonCounter/>) : (
          tables?.length > 0 ? (
            tables.map((value) => (
              <Grid key={value} item >
                <Paper
                  sx={{
                    height: 150,
                    width: 180,
                    display: 'flex',
                    flexDirection: 'column', // Added to stack the children vertically
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: () =>
                      value.status === 'SUCCESS' ? '#00D13B' : '#E00E0E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                  }}
                  onClick={() => {
                    if (value.status === 'SUCCESS') {
                      dispatch(alertCounterToggle());
                      setSelectTable(value.id);
                    } else {
                      navigate(`${paths.counter}/${value.id}`);
                    }
                  }}
                >
                  {value.status !== 'SUCCESS' && value.order && (
                    <Typography variant='h6' align="center">{formatTime12Hour(value.order.checkin)}</Typography>
                  )}
                  <Typography variant='h5' >{value.name}</Typography>
                </Paper>
              </Grid>
            ))
          ) : (
            <Paper
              sx={{
                height: 180,
                width: 350,                
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
              }}             
            >
              <Typography variant='h5' >Table does not exist</Typography>
            </Paper>
          ))}          
        </Grid>
        <AlertCounter submitOrder={()=>submitOrder()}/>
      </Grid>
    </Grid>

    </div>
  );
};


