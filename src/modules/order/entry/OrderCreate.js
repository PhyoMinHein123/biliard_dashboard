import { Grid, InputLabel, OutlinedInput, Stack, Paper, MenuItem, Select } from "@mui/material";
import { paths } from "../../../constants/paths";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderService } from "../orderService";
import { payloadHandler } from "../../../helpers/handler";
import { Breadcrumb } from "../../../shares/Breadcrumbs";
import { orderPayload } from "../orderPayload";
import { formBuilder } from "../../../helpers/formBuilder";
import FormMainAction from "../../../shares/FormMainAction";
import { ValidationMessage } from "../../../shares/ValidationMessage";
import { Profile } from "../../../shares/Profile";
import { getRequest } from "../../../helpers/api";
import { endpoints } from "../../../constants/endpoints";

export const OrderCreate = () => {
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState(orderPayload.store);
    const [shops, setShops] = useState([]);
    const [roles, setRoles] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitOrder = async () => {
        setLoading(true);
        const formData = formBuilder(payload, orderPayload.store);
        const create = await orderService.store(formData, dispatch);
        if(create.status == 200){
            navigate(paths.order);
        }
        setLoading(false);
    };

    const loadingData = useCallback(async () => {
        setLoading(true);
        const shopResult = await getRequest(`${endpoints.shop}`);
        if (shopResult.status === 200) {
          setShops(shopResult.data);
        }
        const roleResult = await getRequest(`${endpoints.role}`);
        if (roleResult.status === 200) {
            setRoles(roleResult.data);
        }
        setLoading(false);
    }, []);
    
    useEffect(() => {
        loadingData();
    }, [loadingData]);

    return (
        <>
            <div className=" grid">
                <div className="col-12">
                    <Breadcrumb />
                </div>

                <Paper elevation={3} style={{ padding: 20, margin: 10 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Stack
                                spacing={1}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Profile
                                    preview={payload.image ? payload.image : null}
                                    onSelect={(e) => payloadHandler(payload, e, 'image', (updateValue) => {
                                        setPayload(updateValue);
                                    })}
                                />
                                <ValidationMessage field={"image"} />
                            </Stack>
                        </Grid>
                        
                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel >
                                    Name (required)
                                </InputLabel>
                                <OutlinedInput
                                    type="text"
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
                                    placeholder="Enter Order Name"
                                />
                                <ValidationMessage field={"name"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel >
                                    Phone 
                                </InputLabel>
                                <OutlinedInput
                                    type="number"
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
                                    placeholder="Enter Order Phone"
                                />
                                <ValidationMessage field={"phone"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel >
                                    Email (required)
                                </InputLabel>
                                <OutlinedInput
                                    type="email"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "email",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="email"
                                    placeholder="Enter Order Email"
                                />
                                <ValidationMessage field={"email"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel >
                                    Address
                                </InputLabel>
                                <OutlinedInput
                                    type="text"
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
                                    placeholder="Enter Order Address"
                                />
                                <ValidationMessage field={"address"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel > Choose Shop (required) </InputLabel>
                                <Select
                                id="shop_id"
                                value={payload.shop_id}
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
                                <InputLabel > Choose Role </InputLabel>
                                <Select
                                id="role_names"
                                value={payload.role_names ? payload.role_names : ""}
                                onChange={(e) =>
                                    payloadHandler(
                                    payload,
                                    e.target.value,
                                    "role_names",
                                    (updateValue) => {
                                        setPayload(updateValue);
                                    }
                                    )}
                                name="role_names"
                                >
                                { roles.map((value, index) => {
                                    return (
                                    <MenuItem key={`role_names${index}`} value={value.name}> {value.name} </MenuItem>
                                    )
                                })}
                                </Select>
                                <ValidationMessage field={"role_names"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel >Status (required)</InputLabel>
                                <Select
                                    id="status"
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

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel >
                                    Password (required)
                                </InputLabel>
                                <OutlinedInput
                                    type="password"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "password",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="password"
                                    placeholder="Enter Order Password"
                                />
                                <ValidationMessage field={"password"} />
                            </Stack>
                        </Grid>

                        <FormMainAction
                            cancel="Cancle"
                            cancelClick={() => navigate(paths.order)}
                            submit="Create"
                            submitClick={submitOrder}
                            loading={loading}
                        />
                    </Grid>
                </Paper>
            </div>
        </>
    );
};
