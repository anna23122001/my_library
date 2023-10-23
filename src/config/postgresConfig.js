module.exports = {
  "development": {
    username: "postgres",
    password: "admin",
    database: "my_library",
    host: "127.0.0.1",
    dialect: "postgres",
    migrationStorage: "json",
    define: {
      freezeTableName: true,
      timestamps: false,
      underscored: true
    }

  },
  "test": {
    // "username": "root",
    // "password": null,
    // "database": "database_test",
    // "host": "127.0.0.1",
    // "dialect": "mysql"
  },
  "production": {
    // "username": "root",
    // "password": null,
    // "database": "database_production",
    // "host": "127.0.0.1",
    // "dialect": "mysql"
  }
}
