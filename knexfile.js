
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sleeper'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
