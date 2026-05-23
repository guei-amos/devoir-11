// Importation des modules
import mongoose from "mongoose";
import dotenv from "dotenv";
// Importation du modèle Person
import Person from "./models/Person.js";

// Charger les variables d'environnement
dotenv.config();

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connexion MongoDB réussie"))
  .catch((err) => console.log(err));

/* 
   1. Créer et sauvegarder une personne
 */

const createAndSavePerson = () => {

  const person = new Person({
    name: "Carlos",
    age: 25,
    favoriteFoods: ["riz", "pizza"]
  });

  person.save(function(err, data) {

    if (err) {
      console.log(err);
    } else {
      console.log("Personne sauvegardée :", data);
    }

  });

};

/* 
   2. Créer plusieurs personnes
*/

const arrayOfPeople = [
  {
    name: "Mary",
    age: 22,
    favoriteFoods: ["burger", "burritos"]
  },

  {
    name: "John",
    age: 30,
    favoriteFoods: ["pizza"]
  },

  {
    name: "Sarah",
    age: 28,
    favoriteFoods: ["burritos", "salade"]
  }
];

const createManyPeople = () => {

  Person.create(arrayOfPeople, function(err, data) {

    if (err) {
      console.log(err);
    } else {
      console.log("Plusieurs personnes ajoutées :", data);
    }

  });

};

/* 
   3. Rechercher des personnes par nom
 */

const findPeopleByName = (personName) => {

  Person.find({ name: personName }, function(err, data) {

    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }

  });

};

/* 
   4. Rechercher une personne par aliment favori
 */

const findOneByFood = (food) => {

  Person.findOne({ favoriteFoods: food }, function(err, data) {

    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }

  });

};

/* 
   5. Rechercher une personne par ID
 */

const findPersonById = (personId) => {

  Person.findById(personId, function(err, data) {

    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }

  });

};

/* 
   6. Find, Edit, Save
 */

const findEditThenSave = (personId) => {

  Person.findById(personId, function(err, person) {

    if (err) {
      console.log(err);
    } else {

      person.favoriteFoods.push("hamburger");

      person.save(function(err, updatedPerson) {

        if (err) {
          console.log(err);
        } else {
          console.log(updatedPerson);
        }

      });

    }

  });

};

/* 
   7. findOneAndUpdate
 */

const updatePersonAge = (personName) => {

  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true },

    function(err, updatedDocument) {

      if (err) {
        console.log(err);
      } else {
        console.log(updatedDocument);
      }

    }
  );

};

/*
   8. Supprimer une personne par ID
 */

const removeById = (personId) => {

  Person.findByIdAndRemove(personId, function(err, removedPerson) {

    if (err) {
      console.log(err);
    } else {
      console.log("Personne supprimée :", removedPerson);
    }

  });

};

/* 
   9. Supprimer toutes les personnes nommées Mary
 */

const removeManyPeople = () => {

  Person.remove({ name: "Mary" }, function(err, result) {

    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }

  });

};

/* 
   10. Requête chaînée
 */

const queryChain = () => {

  Person.find({ favoriteFoods: "burritos" })

    .sort({ name: 1 })

    .limit(2)

    .select("-age")

    .exec(function(err, data) {

      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }

    });

};

/* 
   APPELS DES FONCTIONS
*/

// createAndSavePerson();

// createManyPeople();

// findPeopleByName("Mary");

// findOneByFood("pizza");

// findPersonById("ID_ICI");

// findEditThenSave("ID_ICI");

// updatePersonAge("John");

// removeById("ID_ICI");

// removeManyPeople();

// queryChain();