// First, tell us your name
let yourName = "Ayda Mkaddem" // HINT: Replace this with your own name!
document.getElementById('credit').textContent = `Created by ${yourName}`

// Gingercookie count

function updateQuantity(displayQuantity) 
{ let quantitygb = document.getElementById('qty-gb') 
console.log(quantitygb)
 quantitygb.innerHTML= displayQuantity}

 function updateQuantityforAll(displayQuantityTotal) 
{ let quantityAll= document.getElementById('qty-total') 
console.log(quantityAll)
 quantityAll.innerHTML= displayQuantityTotal}
 
 
 let quantitygb = 0

 let quantityAll= 0



// Buttons
const quantDown = document.getElementById('minus-gb')
const quantUp = document.getElementById('add-gb')



// add event listener to decrease quantity

quantDown.addEventListener('click', function()
{ if (quantitygb > 0) 
    { quantitygb-- 
    quantityAll-- }
    updateQuantity(` ${quantitygb}`)

      updateQuantityforAll(` ${quantityAll}`)})

// add event listener to increase quantity

quantUp.addEventListener('click', function()
{ quantitygb++
    quantityAll++
 updateQuantity(` ${quantitygb}`)
 updateQuantityforAll(` ${quantityAll}`)})

//Chocolatecookie count
function updateQuantitycc(displayQuantitycc) 
{ let quantitycc = document.getElementById('qty-cc') 
console.log(quantitycc)
 quantitycc.innerHTML= displayQuantitycc}

 let quantitycc= 0

// Buttons
const quantDowncc = document.getElementById('minus-cc')
const quantUpcc = document.getElementById('add-cc')

// add event listener to decrease quantity

quantDowncc.addEventListener('click', function()
{ if (quantitycc > 0) 
    { quantitycc-- 
    quantityAll-- }
    updateQuantitycc(`${quantitycc}`)

      updateQuantityforAll(` ${quantityAll}`)})

// add event listener to increase quantity

quantUpcc.addEventListener('click', function()
{ quantitycc++
    quantityAll++
 updateQuantitycc(`${quantitycc}`)
 updateQuantityforAll(`${quantityAll}`)})

// Sugarcookie count

function updateQuantitysugar(displayQuantitysugar) 
{ let quantitysugar = document.getElementById('qty-sugar') 
console.log(quantitysugar)
 quantitysugar.innerHTML= displayQuantitysugar}

 let quantitysugar = 0

// Buttons

const quantDownsugar = document.getElementById('minus-sugar')
const quantUpsugar = document.getElementById('add-sugar')

// add event listener to decrease quantity

quantDownsugar.addEventListener('click', function()
{ if (quantitysugar > 0) 
    { quantitysugar-- 
    quantityAll-- }

    updateQuantitysugar(` ${quantitysugar}`)

    updateQuantityforAll(` ${quantityAll}`)})

// add event listener to increase quantity

quantUpsugar.addEventListener('click', function()
{ quantitysugar++
   quantityAll++
 updateQuantitysugar(` ${quantitysugar}`)
 updateQuantityforAll(` ${quantityAll}`)})





















 







