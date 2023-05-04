/**
 * 
 * In the amazon project, go to the home page and add a toaster (18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster. 
 * Choosen 4.99 shipping for the toaster. 
 * 
 * Calculate the cost of the products
 * (before shipping and taxes).
 * Hint: Calculate in cents to avoid inaccuracies
 */ 

const toaster = 18.99 
const ball = 20.95
const shirt = 7.99 

const total = toaster + ball + shirt
console.log(Math.round(total))