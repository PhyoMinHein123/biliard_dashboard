import { Grid, InputLabel, OutlinedInput, Stack, Paper } from "@mui/material";
import { paths } from "../../../constants/paths";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { paymentService } from "../paymentService";
import { payloadHandler } from "../../../helpers/handler";
import { Breadcrumb } from "../../../shares/Breadcrumbs";
import { paymentPayload } from "../paymentPayload";
import { formBuilder } from "../../../helpers/formBuilder";
import FormMainAction from "../../../shares/FormMainAction";
import { ValidationMessage } from "../../../shares/ValidationMessage";

export const PaymentCreate = () => {
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState(paymentPayload.store);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitGenre = async () => {
        setLoading(true);
        const formData = formBuilder(payload, paymentPayload.store);
        const create = await paymentService.store(formData, dispatch);
        if(create.status == 200){
            navigate(paths.payment);
        }
        setLoading(false);
    };

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
                                    placeholder="Enter Payment Name"
                                />
                                <ValidationMessage field={"name"} />
                            </Stack>
                        </Grid>

                        <FormMainAction
                            cancel="Cancle"
                            cancelClick={() => navigate(paths.payment)}
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