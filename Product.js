const { INTEGER, STRING, TINYINT, DECIMAL } = require("sequelize");
const { sequelize } = require("./db");
// const sequelize = require('sequelize');



const Products = sequelize.define('ProductV2',{
    productId: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    productName: {
        type: STRING
    },
    productImagesName: {
        type: STRING
    },
    productImagesUrls: {
        type: STRING
    },
    brandName: {
        type: STRING
    },
    description: {
        type: STRING
    },
    itemCode: {
        type: STRING
    },
    itemType: {
        type: STRING
    },
    currency: {
        type: STRING
    },
    currencyCode: {
        type: STRING
    },
    saleAmount: {
        type: DECIMAL
    },
    broshureFileName: {
        type: STRING
    },
    broshureUrls: {
        type: STRING
    },
    vendors: {
        type: TINYINT
    },
    status: {
        type: TINYINT
    },
    createdBy: {
        type: INTEGER
    },
    subCategoryId: {
        type: INTEGER
    },
    categoryId: {
        type: INTEGER
    },
    uomId: {
        type: INTEGER
    },
    shipingMethodId: {
        type: INTEGER
    },
    shippingTermId: {
        type: INTEGER
    },
    paymentTermId: {
        type: INTEGER
    },
}, {
    tableName: 'ProductV2',
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

module.exports = {
    Products
}

// created: {
        
// },
// updated: {

// },


//uomCode: {
//
//},
//uomDescription: {
//},

//categoryName: {
//},
//subCategoryName: {
// },
// organisationName: {
// },
// organisationId: {

// },
// vendorInfo: {

// },