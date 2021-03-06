module.exports = {
  development: {
    username: 'postgres',
    password: 'Andela',
    database: 'postitdb',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: 'Andela',
    database: 'testdb',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'POSTIT_DATABASE_URL',
    dialect: 'postgres'
  }
};
