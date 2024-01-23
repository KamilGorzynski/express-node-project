const mongoose = require('mongoose');

// Połączenie z bazą danych MongoDB
mongoose.connect('mongodb://mongo:27017/express_db', { useNewUrlParser: true, useUnifiedTopology: true });

// Definicja schematu i modelu dla kolekcji "documents"
const authorSchema = new mongoose.Schema({
  name: String,
  age: Number
});

export default mongoose.model('Author', authorSchema);