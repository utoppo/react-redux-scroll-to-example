import React from "react";

import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals
} from "unique-names-generator";

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const categories = [
  { id: 1, name: "Social" },
  { id: 2, name: "Powerful" },
  { id: 3, name: "Creative" }
];

const generateName = () => {
  return uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    style: "capital",
    separator: " "
  });
};

const generateAnimal = (index) => {
  return {
    id: index + 1,
    name: generateName(),
    categoryId: getRandomNumber(1, 3),
    ref: React.createRef()
  };
};

const animalCollection = Array.from({ length: 50 }, (v, i) =>
  generateAnimal(i)
);

const initialState = {
  participants: animalCollection,
  categories,
  active_category: {
    id: null,
    name: ""
  },
  active_participant_id: null
};

export { animalCollection as animals, categories, initialState };
