const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Elonge1:Elonge@cluster-p-six-oc-kum0q.mongodb.net/Elonge1?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));