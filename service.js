const { getModel } = require("./model");

const getService = async (data) => {
    try {
        
        const query = {
            currentPage: (data.currentPage) ? data.currentPage : 1,
            pageSize: (data.pageSize) ? data.pageSize : 10,
            orderBy: (data.orderBy) ? data.orderBy : "createdAt",
            orderDir: (data.orderDir) ? data.orderDir : "desc",
            searchBy: (data.searchFields) ? data.searchFields : "",
            searchFields: (data.searchBy) ? data.searchBy : []
        }
        const result = await getModel(query);
        
        // data.pageSize
        // data.orderBy

    //     "currentPage": 1,
    //    "pageSize": 10,
    //    "totalPages": 3,
    //    "totalCount": 25,
        return { status: 200, result, currentPage : data.currentPage, pageSize: data.pageSize, totalCount: result.count, totalPages: Math.ceil(result.count/data.pageSize)};
    } catch (err) {
        console.log('Error occured: getService =>>',err);
        throw new Error({ status: 500, data: err.toString() });
    }
};

module.exports = {
    getService
}