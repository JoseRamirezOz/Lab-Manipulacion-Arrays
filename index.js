
const d = document 
const products = [
    {title:'Burger',price:200},
    {title:'Pizza',price:320}
]

//RECORRER Y RENDERIZAR CON MAP
const $principal = d.getElementById('app')
const $desorderList = d.createElement('ul')
$principal.appendChild($desorderList)

const newList = products.map(e=>`<li>${e.title} costara: ${e.price}</li>`)
$desorderList.innerHTML=`${newList.join("")}`




// RECORRER Y RENDERIZAR CON FOREACH
/*
const $principal = d.getElementById('app')
const $desorderList = d.createElement('ul')
$principal.appendChild($desorderList)


products.forEach((e)=>{
    const $list = d.createElement('li')
    $desorderList.append($list)

    $list.innerText=`${e.title} costara: ${e.price}`
})
*/


const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];


let withTax = JSON.parse(JSON.stringify(orders))
withTax.map(e=>e.tax=.19)


/* Donde JSON.stringify() Convertira un Objeto
en un string*/

/*yyyy JSON.parse() Toma un string y 
devuelve un objeto sin importar que tan complejo sea*/ 


const orders1 = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];


const delivered = orders1.filter(e=>e.delivered === true )
console.log(delivered)