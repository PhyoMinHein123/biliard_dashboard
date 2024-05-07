import { Grid, InputLabel, OutlinedInput, Stack, Paper, MenuItem, Select } from '@mui/material';
import { paths } from "../../../constants/paths";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { counterService } from "../counterService";
import { payloadHandler } from "../../../helpers/handler";
import { Breadcrumb } from '../../../shares/Breadcrumbs'
import { counterPayload } from "../counterPayload";
import { formBuilder } from "../../../helpers/formBuilder";
import FormMainAction from "../../../shares/FormMainAction";
import { ValidationMessage } from '../../../shares/ValidationMessage';
import { Profile } from '../../../shares/Profile';
import { getRequest } from '../../../helpers/api';
import { endpoints } from '../../../constants/endpoints';
import { ProfileImage } from '../../../shares/ProfileImage';
import ScrollTab from '../component/ScrollTab';
import CartList from '../component/CartList';
import ItemList from '../component/ItemList';
import CustomTabPanel from '../component/CustomTabPanel';
import { setPaginate } from '../counterSlice';

export const CounterTable = () => {

  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(counterPayload.update);
  const [shopId, setShopId] = useState(null)
  const [item, setItem] = useState([])
  const [value, setValue] = useState(0);

  const { man } = useSelector((state) => state.share );
  const { table, category, order, paginateParams, categoryParams } = useSelector(state => state.counter);
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const createOrder = async () => {
    console.log(item)
    const response = await counterService.createorder(dispatch, table?.order_id, item);
    if(response.status === 200){
      const request = await counterService.orderlist(dispatch, table?.order_id)
      if(request.status === 200){
        setItem(request?.data?.items === null ? [] : request?.data?.items)
      }
    }
  }

  const addedItem = (e) => {
    setItem([...item, e])
  }

  const loadingData = useCallback(async () => {
    setLoading(true);    
    await counterService.index(dispatch, categoryParams);
    const result = await counterService.show(dispatch, params.id);
    if(result.status === 200){
      const request = await counterService.orderlist(dispatch, result?.data?.order_id)
      if(request.status === 200){
        setItem(request?.data?.items === null ? [] : request?.data?.items)
      }
    }
    setLoading(false);
  }, [dispatch, params.id]);

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

  useEffect(()=>{
    console.log(item)
  },[item])

  return (
    <>
      <div className=" grid">
        <div className="col-12">
          <Breadcrumb />
        </div>

            <Grid container direction="row" spacing={3}>
                <Grid item xs={12} md={12} lg={6}>
                    <Paper elevation={3} style={{ margin: 6 }}>
                        <ScrollTab value={value} category={category} handleChange={handleChange}/>
                        {category.map((data,index)=>(
                          <CustomTabPanel key={index} value={value} index={index}>    
                            <ItemList data={data?.items} loading={loading} setItem={(e)=>addedItem(e)} createOrder={createOrder}/>
                          </CustomTabPanel>
                        ))}                        
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <Paper elevation={3} style={{ margin: 6 }}>
                        <CartList items={item} />
                    </Paper>
                </Grid>
            </Grid>
        
      </div>
    </>
  );
};
