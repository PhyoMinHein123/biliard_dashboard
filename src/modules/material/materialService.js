import { endpoints } from "../../constants/endpoints";
import { delRequest, featchGetRequest, getRequest, postRequest } from "../../helpers/api";
import { httpServiceHandler } from "../../helpers/handler";
import { updateNotification } from "../../shares/shareSlice";
import { index, update } from "./materialSlice";
import { getData } from "../../helpers/localstorage";
import { keys } from "../../constants/config";
import { baseURL } from "../../constants/endpoints";

export const materialService = {
    store: async (payload, dispatch) => {
        const response = await postRequest(endpoints.material, payload);
        await httpServiceHandler(dispatch, response);

        if (response.status === 200) {
            dispatch(updateNotification({
                variant : 'success',
                  message : response.message
            }))
        }
        return response;
    },
    index: async (dispatch, params) => {
        const response = await getRequest(endpoints.material, params);
        await httpServiceHandler(dispatch, response);

        if (response.status === 200) {
            dispatch(
                index(response.data.data ? response.data.data : response.data)
            );
            dispatch(
                updateNotification({
                    variant: "success",
                    message: response.message,
                })
            );
        }
        return response;
    },
    update: async (dispatch, id, payload) => {
        const response = await postRequest(`${endpoints.material}/${id}`, payload);
        await httpServiceHandler(dispatch, response);

        if(response.status === 200) {
            dispatch(update(response.data));
            dispatch(updateNotification({
                variant : 'success',
                  message : response.message
            }))
        }
        return response;
    },
    show: async (dispatch, id) => {
        const response = await getRequest(`${endpoints.material}/${id}`);
        await httpServiceHandler(dispatch, response);

        if(response.status === 200) {
            dispatch(update(response.data));
        }
        
        return response;
    },
    destory: async (dispatch, id) => {
        const response = await delRequest(`${endpoints.material}/${id}`);
        await httpServiceHandler(dispatch, response);

        // if (response.status === 200) {
        //     dispatch(updateNotification({
        //         variant : 'success',
        //           message : response.message
        //     }))
        // }
        return response;
    },
    exportexcel: async (dispatch, params) => {
        const response = await featchGetRequest(`${baseURL}/${endpoints.material}/exportexcel`, params)

        if (response.status === 200) {
            dispatch(updateNotification({
                variant : 'success',
                message : "Datas Export Success"
            }))
        }
        return response;
    },
    exportexcelparams: async (dispatch, params) => {
        const response = await featchGetRequest(`${baseURL}/${endpoints.material}/exportexcelparams`, params)

        if (response.status === 200) {
            dispatch(updateNotification({
                variant : 'success',
                message : "Datas Export Success"
            }))
        }
        return response
    },
    exportpdf: async (dispatch, params) => {
        const response = await featchGetRequest(`${baseURL}/${endpoints.material}/exportpdf`, params, "pdf")

        if (response.status === 200) {
            dispatch(updateNotification({
                variant : 'success',
                message : "Datas Export Success"
            }))
        }
        return response
    },
    exportpdfparams: async (dispatch, params) => {
        const response = await featchGetRequest(`${baseURL}/${endpoints.material}/exportpdfparams`, params, "pdf")

        if (response.status === 200) {
            dispatch(updateNotification({
                variant : 'success',
                message : "Datas Export Success"
            }))
        }
        return response
    },
    import: async (payload, dispatch) => {
        const response = await postRequest(`${endpoints.material}/import`, payload);
        await httpServiceHandler(dispatch, response);

        return response
    },
};