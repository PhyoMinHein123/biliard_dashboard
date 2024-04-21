import { Grid, InputLabel, OutlinedInput, Stack, Paper, MenuItem, Select } from "@mui/material";
import { paths } from "../../../constants/paths";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { itemService } from "../itemService";
import { payloadHandler } from "../../../helpers/handler";
import { Breadcrumb } from "../../../shares/Breadcrumbs";
import { itemPayload } from "../itemPayload";
import { formBuilder } from "../../../helpers/formBuilder";
import FormMainAction from "../../../shares/FormMainAction";
import { ValidationMessage } from "../../../shares/ValidationMessage";
import { getRequest } from "../../../helpers/api";
import { endpoints } from "../../../constants/endpoints";
import { ProfileImage } from "../../../shares/ProfileImage";

export const ItemCreate = () => {
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState(itemPayload.store);
    const [categorys, setCategorys] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitGenre = async () => {
        setLoading(true);
        const formData = formBuilder(payload, itemPayload.store);
        const create = await itemService.store(formData, dispatch);
        if(create.status == 200){
            navigate(paths.item);
        }
        setLoading(false);
    };

    const loadingData = useCallback(async () => {
        setLoading(true);
        const categoryResult = await getRequest(`${endpoints.category}`);
        if (categoryResult.status === 200) {
          setCategorys(categoryResult.data);
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
                                <ProfileImage
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
                                    placeholder="Enter Item Name"
                                />
                                <ValidationMessage field={"name"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel >
                                    Price (required)
                                </InputLabel>
                                <OutlinedInput
                                    type="number"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "price",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="price"
                                    placeholder="Enter Item Price"
                                />
                                <ValidationMessage field={"price"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel >
                                    Purchase Price (required)
                                </InputLabel>
                                <OutlinedInput
                                    type="number"
                                    onChange={(e) =>
                                        payloadHandler(
                                            payload,
                                            e.target.value,
                                            "purchase_price",
                                            (updateValue) => {
                                                setPayload(updateValue);
                                            }
                                        )
                                    }
                                    name="purchase_price"
                                    placeholder="Enter Item Purchase Price"
                                />
                                <ValidationMessage field={"purchase_price"} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Stack spacing={1}>
                                <InputLabel > Choose Category (required) </InputLabel>
                                <Select
                                id="category_id"
                                value={payload.category_id}
                                onChange={(e) =>
                                    payloadHandler(
                                    payload,
                                    e.target.value,
                                    "category_id",
                                    (updateValue) => {
                                        setPayload(updateValue);
                                    }
                                    )}
                                name="category_id"
                                >
                                { categorys.map((value, index) => {
                                    return (
                                    <MenuItem key={`category_id${index}`} value={value.id}> {value.name} </MenuItem>
                                    )
                                })}
                                </Select>
                                <ValidationMessage field={"category_id"} />
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

                        <FormMainAction
                            cancel="Cancle"
                            cancelClick={() => navigate(paths.item)}
                            submit="Create"
                            submitClick={submitGenre}
                            loading={loading}
                        />
                    </Grid>
                </Paper>
            </div>
        </>
    );
};