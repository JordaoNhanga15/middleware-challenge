const { app } = require('./');
const kleur = require('kleur');
require('dotenv').config()


app.listen(process.env.PORT, () => {
  console.log(kleur.green(`Server is running on port ${process.env.PORT}`));
});