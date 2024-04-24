import { useCallback, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { Breadcrumb } from '../../../shares/Breadcrumbs'
import AnalyticEcommerce from '../../../shares/AnalyticEcommerce';
import { counterService } from '../counterService';
import { useDispatch, useSelector } from 'react-redux';

export const CounterList = () => {

  // const { votes, totaluser } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  // const loadingData = useCallback(async () => {
  //   await counterService.uservote(dispatch);
  //   await counterService.totaluser(dispatch);

  // }, [dispatch]);

  // useEffect(() => {
  //     loadingData();
  // }, [loadingData]);

  return (
    <div>
      <Breadcrumb />

      {/* <Grid container rowSpacing={4.5} columnSpacing={2.75}>
       
        <Grid item xs={12} sx={{ mb: -3.65, mt: 1 }}>
          <Typography sx={{ fontWeight: 'bold' }} variant="h6">Vote Statics</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Rock Vote" count={votes.Rock} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="R&B Vote" count={votes["R&B"]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Pop Vote" count={votes.Pop} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Rap Vote" count={votes.Rap} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Unvote" count={votes.none} />
        </Grid>

        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography sx={{ fontWeight: 'bold' }} variant="h6">Total Statics</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Total Page Views" count={totaluser.user} />
        </Grid>
        
        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

 
      </Grid> */}
      
    </div>
  );
};


