//
const Product = require('./products')
const Decorator = require('./decorator')

const dogPet = new Product('atila', 444, 'CHF')
const catPet = new Product('omega', 474, 'GBP')

//Converter at euro
const dogPetEUR = new Decorator(dogPet)
const catPetEUR = new Decorator(catPet)

dogPetEUR.convert()
catPetEUR.convert()