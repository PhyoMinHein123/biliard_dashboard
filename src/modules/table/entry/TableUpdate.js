import { Grid, InputLabel, OutlinedInput, Stack, Paper, MenuItem, Select } from '@mui/material';
import { paths } from "../../../constants/paths";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tableService } from "../tableService";
import { payloadHandler } from "../../../helpers/handler";
import { Breadcrumb } from '../../../shares/Breadcrumbs'
import { tablePayload } from "../tablePayload";
import { formBuilder } from "../../../helpers/formBuilder";
import FormMainAction from "../../../shares/FormMainAction";
import { ValidationMessage } from '../../../shares/ValidationMessage';
import { getRequest } from '../../../helpers/api';
import { endpoints } from '../../../constants/endpoints';

export const TableUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(tablePayload.update);
  const [cashiers, setCashiers] = useState([]);
  const [shops, setShops] = useState([]);
  const { table } = useSelector(state => state.table);
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitTable = async () => {
    setLoading(true);
    const formData = formBuilder(payload, tablePayload.update);
    const response = await tableService.update(dispatch, params.id, formData);
    if(response.status === 200){
      navigate(paths.table);
    }
    setLoading(false);
  }

  const loadingData = useCallback(async () => {
    setLoading(true);
    await tableService.show(dispatch, params.id);

    const cashierResult = await getRequest(`${endpoints.cashier}`);
    if (cashierResult.status === 200) {
        setCashiers(cashierResult.data);
    }
    const shopResult = await getRequest(`${endpoints.shop}`);
    if (shopResult.status === 200) {
        setShops(shopResult.data);
    }
    setLoading(false);
  }, [dispatch, params.id]);

  useEffect(() => {
    loadingData();
  }, [loadingData]);

  useEffect(() => {
    if (table) {
      const updatePayload = { ...table }
      setPayload(updatePayload);
    }
  }, [table])

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
                        <InputLabel >
                            Name (required)
                        </InputLabel>
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
                            placeholder="Enter Table Name"
                        />
                        <ValidationMessage field={"name"} />
                    </Stack>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                        <InputLabel >
                            Description (required)
                        </InputLabel>
                        <OutlinedInput
                            type="text"
                            value={payload.description ? payload.description : ""}
                            onChange={(e) =>
                                payloadHandler(
                                    payload,
                                    e.target.value,
                                    "description",
                                    (updateValue) => {
                                        setPayload(updateValue);
                                    }
                                )
                            }
                            name="description"
                            placeholder="Enter Table Description"
                        />
                        <ValidationMessage field={"description"} />
                    </Stack>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                        <InputLabel > Shop (required) </InputLabel>
                        <Select
                            value={payload.shop_id ? payload.shop_id : ""}
                            onChange={(e) =>
                                payloadHandler(
                                payload,
                                e.target.value,
                                "shop_id",
                                (updateValue) => {
                                    setPayload(updateValue);
                                }
                                )}
                            name="shop_id"
                            >
                            { shops.map((value, index) => {
                                return (
                                <MenuItem key={`shop_id${index}`} value={value.id}> {value.name} </MenuItem>
                                )
                            })}
                        </Select>
                        <ValidationMessage field={"shop_id"} />
                    </Stack>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                        <InputLabel > Cashier (required) </InputLabel>
                        <Select
                            value={payload.cashier_id ? payload.cashier_id : ""}
                            onChange={(e) =>
                                payloadHandler(
                                payload,
                                e.target.value,
                                "cashier_id",
                                (updateValue) => {
                                    setPayload(updateValue);
                                }
                                )}
                            name="cashier_id"
                            >
                            { cashiers.map((value, index) => {
                                return (
                                <MenuItem key={`cashier_id${index}`} value={value.id}> {value.name} </MenuItem>
                                )
                            })}
                        </Select>
                        <ValidationMessage field={"cashier_id"} />
                    </Stack>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                        <InputLabel >Status (required)</InputLabel>
                        <Select
                            id="status"
                            value={payload.status ? payload.status : ""}
                            onChange={(e) =>
                            payloadHandler(
                                payload,
                                e.target.value,
                                "status",
                                (updateValue) => {
                                setPayload(updateValue);
                                }
                            )}
                            name="status"
                        >
                            <MenuItem value="ACTIVE">Active</MenuItem>
                            <MenuItem value="INACTIVE">Inactive</MenuItem>
                        </Select>
                        <ValidationMessage field={"status"} />
                    </Stack>
                </Grid>

                <FormMainAction
                    cancel="Cancle"
                    cancelClick={() => navigate(paths.table)}
                    submit="Update"
                    submitClick={submitTable}
                    loading={loading}
                />
            </Grid>
        </Paper>
      </div>
    </>
  );
};
