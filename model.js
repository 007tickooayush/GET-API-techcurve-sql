const { Products } = require("./Product");

const getModel = async (data) => {
    try {

        let query = {};

        query.skip = (parseInt(data.currentPage) - 1) * parseInt(data.pageSize);
        query.limit = parseInt(data.pageSize);
        query.order = [
                [data.orderBy, data.orderDir]
            ];
        if(data.searchBy) {
            query.where = {
                [data.searchBy]: data.searchFields
            };
        }

        // {
        //     skip: data.currentPage,
        //     limit: data.pageSize,
        //     order: [
        //         [data.orderBy, data.orderDir]
        //     ],
        //     where: {
        //         [data.searchBy]: data.searchFields
        //     }
        // }
        const count = await Products.count();
        const result = await Products.findAll({...query});
        return {result,count};
    } catch (err) {
        console.log('Error occured: getModel =>>',err.toString());
        throw new Error({ status: 500, data: err.toString() });
    }
};

module.exports = {
    getModel
}