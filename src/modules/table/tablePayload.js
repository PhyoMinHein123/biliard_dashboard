export const tablePayload = {
    update: {
        name: "",
        description: "",
        shop_id: "",
        cashier_id: "",
        status: "", 
    },
    store: {
        name: "",
        description: "",
        shop_id: "",
        cashier_id: "",
        status: "", 
    },
    columnsName: 'tableColumns',
    columns: [
        { id: "id", label: "Id", minWidth: 60 },
        { id: "name", label: "Name", minWidth: 100 },
        { id: "description", label: "Description", minWidth: 100 },
        { id: "shop_id", label: "Shop", minWidth: 100 },
        { id: "cashier_id", label: "Cashier", minWidth: 100 },
        { id: "status", label: "Status", minWidth: 100 },

        { id: "created_by", label: "Created By", minWidth: 100 },
        { id: "updated_by", label: "Updated By", minWidth: 100 },
        { id: "created_at", label: "Created At", minWidth: 100 },
        { id: "updated_at", label: "Updated At", minWidth: 100 },

        { id: "option", label: "Option", minWidth: 100 },
    ],
    paginateParams: {
        page: 1,
        per_page: 10,
        columns: "name",
        search: "",
        order: "id",
        sort: "ASC",
        value: "",
        start_date: "",
        end_date: "",
    },
};