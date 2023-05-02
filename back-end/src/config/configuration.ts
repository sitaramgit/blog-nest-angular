export default () => ({
    port: parseInt(process.env.PORT, 10) || 3200,
    database: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432
    }
  });