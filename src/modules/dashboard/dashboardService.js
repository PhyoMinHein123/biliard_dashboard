import { endpoints } from "../../constants/endpoints";
import { getRequest } from "../../helpers/api";
import { httpServiceHandler } from "../../helpers/handler";
import { updateNotification } from "../../shares/shareSlice";
import { totaluser, uservote } from "./dashboardSlice";

export const dashboardService = {
    uservote: async (dispatch) => {
        const response = await getRequest(endpoints.dashboardUserVote);
        await httpServiceHandler(dispatch, response);

        if (response.status === 200) {
            dispatch(
                uservote(response.data)
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
    totaluser: async (dispatch) => {
        const response = await getRequest(endpoints.dashboardTotalUser);
        await httpServiceHandler(dispatch, response);

        if (response.status === 200) {
            dispatch(
                totaluser(response.data)
            );
            dispatch(
                updateNotification({
                    variant: "success",
                    message: response.message,
                })
            );
        }
        return response;
    }
};
