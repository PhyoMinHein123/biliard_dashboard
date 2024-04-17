import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./shares/countSlice";
import shareSlice from "./shares/shareSlice";

import dashboardSlice from "./modules/dashboard/dashboardSlice";
import shopSlice from "./modules/shop/shopSlice";
import userSlice from "./modules/user/userSlice";

export const stores = configureStore({
    reducer: {
        share: shareSlice,
        count: countSlice,
        shop: shopSlice,
        user: userSlice,
        dashboard: dashboardSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
