**NOTE : field names are not exactly same for the model to be created and the reference keys are not utilized due to time contraints for researching the key names on other tables**

Sample output: 
```
{
    "message": "server up",
    "data": {
        "status": 200,
        "result": [
            {
                "productId": 16,
                "productName": "ABCDEFG",
                "productImagesName": "",
                "productImagesUrls": "",
                "brandName": "121221",
                "description": "<p>wqwq</p>",
                "itemCode": "PD-Zea3",
                "itemType": "Apparel",
                "currency": "Rupees",
                "currencyCode": "₹",
                "saleAmount": "100.000",
                "broshureFileName": "",
                "broshureUrls": "",
                "vendors": "36,37,131",
                "status": 1,
                "createdBy": 6,
                "subCategoryId": 63,
                "categoryId": 108,
                "uomId": 84,
                "shipingMethodId": 40,
                "shippingTermId": 98,
                "paymentTermId": 97,
                "createdAt": "2024-03-21T06:52:29.000Z",
                "updatedAt": "2024-03-23T04:16:30.000Z"
            },
        ...
            {
                "productId": 7,
                "productName": "guru test",
                "productImagesName": "development/1710639893502-9591.png",
                "productImagesUrls": "https://conqt-e-procurement.s3.amazonaws.com/development/1710639893502-9591.png",
                "brandName": "test",
                "description": "<p>yolo</p>",
                "itemCode": "PD-uQW8",
                "itemType": "Apparel",
                "currency": "Rupees",
                "currencyCode": "₹",
                "saleAmount": "12222.000",
                "broshureFileName": "",
                "broshureUrls": "",
                "vendors": "127,128,129,131,154,206",
                "status": 1,
                "createdBy": 6,
                "subCategoryId": 39,
                "categoryId": 93,
                "uomId": 70,
                "shipingMethodId": 40,
                "shippingTermId": 96,
                "paymentTermId": 97,
                "createdAt": "2024-03-17T01:44:53.000Z",
                "updatedAt": "2024-03-17T19:19:47.000Z"
            }
        ],
        "currentPage": "1",
        "pageSize": "10",
        "totalCount": 16,
        "totalPages": 2
    }
}
```
Objective:
Design a Node.js GET API that supports pagination and filtering for fetching product details from a database based on specified parameters. The API should handle various parameters such as current page, page size, order by, order direction, and search by field.
API Requirements:
1. Endpoint:
   - Design a GET endpoint for fetching product details.
2. Parameters:
   - Implement the following parameters in the API:
     - `currentPage`: Current page number.
     - `pageSize`: Number of items per page.
     - `orderBy`: Field to order the results by.
     - `orderDir`: Order direction (ascending/descending).
     - `searchBy`: Field name for searching.
     - `searchFields`: Array of column names to be searched.
3. Default Values:
   - If any of the parameters is not provided, use the following default values:
     - `pageSize`: 10
     - `currentPage`: 1
     - `orderBy`: 'createdAt'
     - `orderDir`: 'desc'
     - `searchBy`:""
     - `searchFields`:[]
4. Data Fetching:
   - Fetch product details from the database based on the provided parameters.
   - Retrieve the following details for each product:
     - `productId`
     - `productName`
     - `productImageName`
     - `productImageURL`
     - `brandName`
     - `description`
     - `itemCode`
     - `itemType`
     - `currency`
     - `currencyCode`
     - `saleAmount`
     - `brochureFileName`
     - `brochureFileURL`
     - `vendors`
     - `status`
     - `createdBy`
     - `created`
     - `updated`
     - `subCategoryId`
     - `categoryId`
     - `uomId`
     - `shippingMethodId`
     - `shippingTermsId`
     - `paymentTermsId`
     - `categoryName`
     - `subCategoryName`
     - `uomCode`
     - `uomDescription`
     - `organisationName`
     - `organisationId`
     - `vendorInfo`
5. Filtering:
   - Implement filtering based on the `searchBy` field.
   - Allow users to search data using any field name.
   - If `searchBy` is provided along with `searchField`:
     - The API should filter the results based on the provided field name and search term.
     - If `searchBy` is given as "product1", the search will be performed using the term "product1".
   - The `searchFields` parameter should contain the column names to be searched. If `searchFields` are provided, only those specified columns need to be searched. Otherwise, the search will be performed across all columns.
     - Example: If `searchBy` is provided as "product1" and `searchFields` are provided as ["productName", "description"], the API should only search in the `productName` and `description` columns for the term "product1".
   - If `searchBy` is an empty string and `searchFields` is an empty array, the API should return all records without any filtering.
6. Response Format:
   - The response should be a JSON object with the following structure:
     ```json
     {
       "currentPage": 1,
       "pageSize": 10,
       "totalPages": 3,
       "totalCount": 25,
       "data": [
         // Product details for the current page
       ]
     }
     ```
Note:
- Ensure that the API responds correctly to various parameter combinations and handles errors gracefully.
- The API should support proper error handling and validation for incoming parameters.
- The API should be scalable and efficient in fetching and filtering large datasets.
 
 
 
 
https://db-technical-test.conqt.com/
 
admin 
DB Pass - NoTeDeSt^C10.6?SxwY882}
 
Host : nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com

Port : 3306
phpMyAdmin
 
DB name is - conqtvms_dev ,Product Table Name is  ProductV2, Vendor Table is VendorsOrganizations
