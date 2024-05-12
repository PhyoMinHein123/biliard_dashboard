import { Grid, InputLabel, OutlinedInput, Stack, Paper, MenuItem, Select } from '@mui/material';
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { counterService } from "../counterService";
import { Breadcrumb } from '../../../shares/Breadcrumbs'
import { counterPayload } from "../counterPayload";
import ScrollTab from '../component/ScrollTab';
import CartList from '../component/CartList';
import ItemList from '../component/ItemList';
import CustomTabPanel from '../component/CustomTabPanel';
import { setPaginate } from '../counterSlice';

export const CounterTable = () => {

  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(counterPayload.update);
  const [shopId, setShopId] = useState(null)
  const [value, setValue] = useState(0);

  const { man } = useSelector((state) => state.share );
  const { table, category, items, order, paginateParams, categoryParams } = useSelector(state => state.counter);
  const params = useParams();
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const loadingData = useCallback(async () => {
    setLoading(true);    
    await counterService.index(dispatch, categoryParams);
    const result = await counterService.show(dispatch, params.id);
    if(result.status === 200){
      const request = await counterService.orderlist(dispatch, result?.data?.order_id)
    }
    setLoading(false);
  }, [dispatch, params.id, order]);

  useEffect(() => {
    loadingData();
  }, [loadingData]);

  useEffect(()=>{
    if(shopId !== null){
      dispatch(
        setPaginate({
            ...categoryParams,
            shop_id: `${shopId}`,
        }))
        setLoading(false)
    }
  },[shopId])

  useEffect(()=>{    
    if(Object.keys(man).length !== 0){
      setShopId(man.shop_id)
    }
  },[man])

  return (
    <>
      <div className=" grid">
        <div className="col-12">
          <Breadcrumb />
        </div>

            <Grid container direction="row" spacing={3}>
                <Grid item xs={12} md={12} lg={6}>
                <Paper elevation={3} style={{ margin: 6 }}>
                  <ScrollTab value={value} category={category.filter(item => item.status && item.status === 'ACTIVE')} handleChange={handleChange} />
                  {category.filter(item => item.status && item.status === 'ACTIVE').map((data, index) => (
                      <CustomTabPanel key={index} value={value} index={index}>
                        <ItemList data={data?.items} loading={loading} />
                      </CustomTabPanel>
                    ))
                  }
                </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <Paper elevation={3} style={{ margin: 6 }}>
                        <CartList />
                    </Paper>
                </Grid>
            </Grid>
        
      </div>
    </>
  );
};
