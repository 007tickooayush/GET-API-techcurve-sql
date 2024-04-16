const express = require('express');
const { getController } = require('./controller');
const app = express();


const PORT = 3000;

// -------- req schema:
// currentPage
// pageSize
// orderBy
// orderDir
// searchBy
// searchFields

//  -------- DEMO:
// - `pageSize`: 10
// - `currentPage`: 1
// - `orderBy`: 'createdAt'
// - `orderDir`: 'desc'
// - `searchBy`:""
// - `searchFields`:[]

const db = require('./db');

app.get('/', getController);


db.connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port: ${PORT}`);
    });
})
