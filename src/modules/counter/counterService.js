import { endpoints } from "../../constants/endpoints";
import { getRequest } from "../../helpers/api";
import { httpServiceHandler } from "../../helpers/handler";
import { updateNotification } from "../../shares/shareSlice";
import { tables } from "./counterSlice";

export const counterService = {
    tables: async (dispatch, params) => {
        const response = await getRequest(endpoints.table, params);
        await httpServiceHandler(dispatch, response);

        if (response.status === 200) {
            dispatch(tables(response.data.data));
            dispatch(
                updateNotification({
                    variant: "success",
                    message: response.message,
                })
            );
        }
        return response;
    },
};
