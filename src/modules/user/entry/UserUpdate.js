import { Grid, InputLabel, OutlinedInput, Stack, Paper, MenuItem, Select } from '@mui/material';
import { paths } from "../../../constants/paths";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../userService";
import { payloadHandler } from "../../../helpers/handler";
import { Breadcrumb } from '../../../shares/Breadcrumbs'
import { userPayload } from "../userPayload";
import { formBuilder } from "../../../helpers/formBuilder";
import FormMainAction from "../../../shares/FormMainAction";
import { ValidationMessage } from '../../../shares/ValidationMessage';

export const UserUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(userPayload.update);
  const { user } = useSelector(state => state.user);
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitUser = async () => {
    setLoading(true);
    const formData = formBuilder(payload, userPayload.update);
    await userService.update(dispatch, params.id, formData);
    setLoading(false);
    navigate(paths.user);
  }

  const loadingData = useCallback(async () => {
    setLoading(true);
    await userService.show(dispatch, params.id);
    setLoading(false);
  }, [dispatch, params.id]);

  useEffect(() => {
    loadingData();
  }, [loadingData]);

  useEffect(() => {
    if (user) {
      const updatePayload = { ...user }
      updatePayload.file_path = null;
      setPayload(updatePayload);
    }
  }, [user])

  return (
    <>
      <div className=" grid">
        <div className="col-12">
          <Breadcrumb />
        </div>

        <Paper elevation={3} style={{ padding: 20, margin: 10 }}>
          <Grid container spacing={3}>

            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel > Name </InputLabel>
                <OutlinedInput
                  type="text"
                  value={payload.name ? payload.name : ""}
                  onChange={(e) =>
                    payloadHandler(
                      payload,
                      e.target.value,
                      "name",
                      (updateValue) => {
                        setPayload(updateValue);
                      }
                    )
                  }
                  name="name"
                  placeholder="Enter User Name"
                />
                <ValidationMessage field={"name"} />
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel >Phone </InputLabel>
                <OutlinedInput
                  type="number"
                  value={payload.phone ? payload.phone : ""}
                  onChange={(e) =>
                    payloadHandler(
                      payload,
                      e.target.value,
                      "phone",
                      (updateValue) => {
                        setPayload(updateValue);
                      }
                    )
                  }
                  name="phone"
                  placeholder="Enter User Phone"
                />
                <ValidationMessage field={"phone"} />
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel > Address </InputLabel>
                <OutlinedInput
                  type="text"
                  value={payload.address ? payload.address : ""}
                  onChange={(e) =>
                    payloadHandler(
                      payload,
                      e.target.value,
                      "address",
                      (updateValue) => {
                        setPayload(updateValue);
                      }
                    )
                  }
                  name="address"
                  placeholder="Enter User Address"
                />
                <ValidationMessage field={"address"} />
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel > Open Time </InputLabel>
                <OutlinedInput
                  type="time"
                  value={payload.open_time ? payload.open_time : ""}
                  onChange={(e) =>
                    payloadHandler(
                      payload,
                      e.target.value,
                      "open_time",
                      (updateValue) => {
                        setPayload(updateValue);
                      }
                    )
                  }
                  name="open_time"
                  placeholder="Enter User Open Time"
                />
                <ValidationMessage field={"open_time"} />
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel > Close Time </InputLabel>
                <OutlinedInput
                  type="time"
                  value={payload.close_time ? payload.close_time : ""}
                  onChange={(e) =>
                    payloadHandler(
                      payload,
                      e.target.value,
                      "close_time",
                      (updateValue) => {
                        setPayload(updateValue);
                      }
                    )
                  }
                  name="close_time"
                  placeholder="Enter User Close Time"
                />
                <ValidationMessage field={"close_time"} />
              </Stack>
            </Grid>

            <FormMainAction
              cancel="Cancle"
              cancelClick={() => navigate(paths.user)}
              submit="Update"
              submitClick={submitUser}
              loading={loading}
            />
          </Grid>
        </Paper>
      </div>
    </>
  );
};
