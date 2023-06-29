const server = require('./src/app.js');
const { conn, Pokemons, PokemonTypes } = require('./src/db.js');
const PORT = 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    // const allPokemons = Pokemons.findAll
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
