const { getService } = require("./service");

// const joi = require('joi');

// const validateSchema = (req,res,next) => {

//     try {
//         const schema = new joi.object({
//             currentPage: joi.number().default(1).optional(),
//             pageSize: joi.number().default(10).optional(),
//             orderBy: joi.string().allow("").optional(),
//             orderDir: joi.string().allow("").optional(),
//             searchBy: joi.string().allow("").optional(),
//             searchFields: joi.array().optional(),
//         });   
//     } catch (err) {
//         res.send({data: err.toString()})
//     }
// }

const getController = async (req, res, next) => {
    try {
        const data = await getService(req.query);
        res.send({ message: 'server up', data: data});
    } catch (error) {
        console.log('Error occured: getController =>>', error);
        res.send({ data: error.toString() });
    }
}

module.exports = {
    getController
}
