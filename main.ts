game.splash("Let's find the cost of your pizza")
let Diameter = game.askForNumber("What is the diameter of your pizza in cm?")
let labour_cost = 0.75
let rent_on_shop = 1
let HST = 0.13
let materials = 0.5
let subtotal = labour_cost + (rent_on_shop + rent_on_shop * Diameter)
let total = subtotal * HST + (labour_cost + (rent_on_shop + rent_on_shop * Diameter))
game.splash("The subtotal of a pizza with the diameter" + Diameter + "will be $" + subtotal + "and the total will be $" + total)
