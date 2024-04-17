import { Card, Chip, Grid, Stack, Typography } from '@mui/material';


const AnalyticEcommerce = ({ title, count }) => (
  <Card sx={{ display: 'flex', justifyContent: 'center', padding: 5 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        {title}
      </Typography>
      <Grid container alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item>
          <Typography variant="h4" color="inherit">
            {count}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  </Card>
);

export default AnalyticEcommerce;
