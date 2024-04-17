import { createSlice } from "@reduxjs/toolkit";

const shareSlice = createSlice({
  name: "share",
  initialState: {
    notification: [],
    errors: null,
    showSidebar: false,
    showAlert: false,
    statusFilter: "ALL",
    startFilterDate: null,
    endFilterDate: null,
    selectedId: 0,
    user: {}
  },
  reducers: {
    updateNotification: (state, action) => {
      state.notification.push({
        id : Date.now(),
        variant : action.payload.variant,
        message : action.payload.message
    });
      return state;
    },
    removeNotification: (state, action) => {
      state.notification = state.notification.filter(
        (notification) => notification.id !== action.payload
      );
    },
    updateError: (state, action) => {
      state.errors = { ...action.payload };
      return state;
    },
    sidebarToggle: (state) => {
      state.showSidebar = !state.showSidebar;
      return state;
    },
    alertToggle: (state) => {
      state.showAlert = !state.showAlert
      return state
    },
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
      return state
    },
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
      return state;
    },
    setDateFilter: (state,action) => {
        state.startFilterDate = action.payload.startDate;
        state.endFilterDate = action.payload.endDate;
        return state;
    },
    updateUser: (state,action) => {
      state.user = action.payload;
      return state;
    }
  },
});

export const {
  updateNotification,
  removeNotification,
  updateError,
  sidebarToggle,
  alertToggle,
  setSelectedId,
  setStatusFilter,
  setDateFilter,
  updateUser
} = shareSlice.actions;
export default shareSlice.reducer;
