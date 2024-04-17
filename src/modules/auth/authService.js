
import { keys } from "../../constants/config";
import { endpoints } from "../../constants/endpoints";
import { postRequest } from "../../helpers/api"
import { httpServiceHandler } from "../../helpers/handler";
import { setData } from "../../helpers/localstorage";
import { updateNotification, updateUser } from "../../shares/shareSlice";

export const authService = {
    login: async (payload, dispatch) => {
        const response = await postRequest(endpoints.login, payload);

        await httpServiceHandler(dispatch, response);

        if(response.status === 200) {
            setData(keys.API_TOKEN, response.data.original.access_token);
            setData(keys.USER, response.data.original.user);
            // setData(keys.ROLE,response.data.user.rnp.role);
            // setData(keys.PERMISSION,response.data.user.rnp.permissions);
            
            dispatch(updateUser(response.data.original.user));
            dispatch(updateNotification({
                variant : 'success',
                  message : response.message
            }))
        }
        
        return response;
    }
}