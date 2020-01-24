require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 4000,
  host: process.env.HOST || 'http://localhost:',
  cors: process.env.CORS,
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbUri2: process.env.DB_URI ||`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB2_NAME}`,

  dbUri: process.env.DB_URI ||`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
};
module.exports = { config };