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
import ScrollTab from '../../../shares/ScrollTab';

export const CounterTable = () => {

  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(counterPayload.update);

  const { table } = useSelector(state => state.counter);
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const loadingData = useCallback(async () => {
    setLoading(true);
    await counterService.show(dispatch, params.id);

    setLoading(false);
  }, [dispatch, params.id]);

  useEffect(() => {
    loadingData();
  }, [loadingData]);


  return (
    <>
      <div className=" grid">
        <div className="col-12">
          <Breadcrumb />
        </div>

        
            <Grid container direction="row" spacing={3}>
                <Grid item xs={12} md={12} lg={6}>
                    <Paper elevation={3} style={{ padding: 20, margin: 10 }}>
                        <ScrollTab />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <Paper elevation={3} style={{ padding: 20, margin: 10 }}>
                        <ScrollTab />
                    </Paper>
                </Grid>
            </Grid>
        
      </div>
    </>
  );
};