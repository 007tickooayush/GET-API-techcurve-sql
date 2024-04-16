const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    host: 'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
    password: 'NoTeDeSt^C10.6?SxwY882}',
    username: 'admin',
    port: 3306,
    dialect: 'mysql',
    database: 'conqtvms_dev',
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();    
    } catch (err) {
        console.error('Error occured: DB:=>',err);
    }
    
}

module.exports = {
    sequelize,
    connectDB
}