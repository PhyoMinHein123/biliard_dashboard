import { endpoints } from "../../constants/endpoints";
import { getRequest, postRequest } from "../../helpers/api";
import { httpServiceHandler } from "../../helpers/handler";
import { updateNotification } from "../../shares/shareSlice";
import { category, items, tables, update, updateorder } from "./counterSlice";

export const counterService = {
    tables: async (dispatch, params) => {
        const response = await getRequest(endpoints.table, params);
        await httpServiceHandler(dispatch, response);

        if (response.status === 200) {
            dispatch(tables(response.data));
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
    createorder: async (dispatch, id, payload) => {
        const response = await postRequest(`${endpoints.order}/${id}`, payload);
        await httpServiceHandler(dispatch, response);
       
        if (response.status === 200) {
            dispatch(items(response?.data?.items));
            dispatch(updateNotification({
                variant : 'success',
                  message : response.message
            }))
        }
        return response;
    },
    orderlist: async (dispatch, id) => {
        const response = await getRequest(`${endpoints.order}/${id}`);
        await httpServiceHandler(dispatch, response);

        if(response.status === 200) {
            dispatch(updateorder(response.data));
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
