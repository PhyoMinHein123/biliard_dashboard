import { endpoints } from "../../constants/endpoints";
import { getRequest, postRequest } from "../../helpers/api";
import { httpServiceHandler } from "../../helpers/handler";
import { updateNotification } from "../../shares/shareSlice";
import { category, tables, update } from "./counterSlice";

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
    index: async (dispatch, params) => {
        const response = await getRequest(endpoints.category, params);
        await httpServiceHandler(dispatch, response);

        if (response.status === 200) {
            dispatch(
                category(response.data.data ? response.data.data : response.data)
            );            
        }
        return response;
    },          
    checkin: async (payload, dispatch) => {
        const response = await postRequest(endpoints.order, payload);
        await httpServiceHandler(dispatch, response);

        if (response.status === 200) {
            dispatch(updateNotification({
                variant : 'success',
                  message : response.message
            }))
        }
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
