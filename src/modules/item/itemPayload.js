export const itemPayload = {
    update: {
        name: "", 
        price: "", 
        purchase_price: "",
        image: "", 
        status: "",
        category_id: "", 
    },
    store: {
        name: "", 
        price: "", 
        purchase_price: "",
        image: "", 
        status: "",
        category_id: "", 
    },
    columnsName: 'itemColumns',
    columns: [
        { id: "id", label: "Id", minWidth: 60 },
        { id: "name", label: "Name", minWidth: 100 },
        { id: "price", label: "Price", minWidth: 100 },
        { id: "purchase_price", label: "Purchase Price", minWidth: 100 },
        { id: "image", label: "Image", minWidth: 100 },
        { id: "category_id", label: "Category", minWidth: 100 },
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
