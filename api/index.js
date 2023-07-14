const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config()

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, async () => {
    // const allPokemons = Pokemons.findAll
    console.log('%s listening', process.env.PORT ); // eslint-disable-line no-console
  });
});
