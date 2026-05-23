// Importation de mongoose
import mongoose from "mongoose";

// Création du schéma Person
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  age: Number,

  favoriteFoods: [String]
});


// Exportation du modèle
export default mongoose.model("Person", personSchema);
