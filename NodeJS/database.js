const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
let db = process.env.DB_USER;
const pwd = process.env.DB_PASS;
let dbName = process.env.DB_NAME;
mongoose.connect(`mongodb+srv://${db}:${pwd}@cluster-p-six-oc-kum0q.mongodb.net/${dbName}?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));