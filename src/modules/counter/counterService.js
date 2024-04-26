import { endpoints } from "../../constants/endpoints";
import { getRequest } from "../../helpers/api";
import { httpServiceHandler } from "../../helpers/handler";
import { updateNotification } from "../../shares/shareSlice";
import { tables, update } from "./counterSlice";

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
    package: async (dispatch, params) => {
        const response = await getRequest(endpoints.package, params);
        await httpServiceHandler(dispatch, response);

        return response;
    },
    show: async (dispatch, id) => {
        const response = await getRequest(`${endpoints.table}/${id}`);
        await httpServiceHandler(dispatch, response);

        if(response.status === 200) {
            dispatch(update(response.data));
        }
        
        return response;
    },
};
