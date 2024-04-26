export const counterPayload = {
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
    columnsName: 'counterColumns',
    columns: [
        { id: "id", label: "Id", minWidth: 60 },
        { id: "name", label: "Name", minWidth: 100 },
        { id: "description", label: "Description", minWidth: 100 },
        { id: "shop_id", label: "Shop", minWidth: 100 },
        { id: "cashier_id", label: "Cashier", minWidth: 100 },
        { id: "status", label: "Status", minWidth: 100 },
    ],
    paginateParams: {
        page: 1,
        per_page: 10,
        columns: "name,description",
        search: "",
        order: "id",
        sort: "ASC",
        value: "",
        start_date: "",
        end_date: "",
        filter: "shop_id",
        value: ""
    },
};
