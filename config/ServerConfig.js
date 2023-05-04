const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL || "mongodb://0.0.0.0:27017/dbAutoStudio";
const dbConnectionOptions = {
  maxPoolSize: 9,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = {
  PORT,
  DB_URL,
  dbConnectionOptions,
};
