import React from 'react'
import Card from './components/Card'

const App = () => {

  const iceCreams = [
  {
    img: "https://i.pinimg.com/736x/a2/64/89/a26489963b8e1c1b5bed392563a8c8c1.jpg",
    name: "Strawberry Bliss",
    properties: ["Vegan", "Organic", "Low fat"],
    description: "Fresh strawberry cream",
    properties2: ["Strawberry", "Almond flakes", "Honey drizzle"],
    price: "$10.00",
    delivery: "+$2 delivery"
  },
  {
    img: "https://i.pinimg.com/736x/d7/8b/16/d78b16ba1fdfa0d55f718aa29d8637a0.jpg",
    name: "Vanilla Dream",
    properties: ["Classic", "Gluten free", "Smooth"],
    description: "Rich vanilla flavor",
    properties2: ["Choco chips", "Caramel", "Cashews"],
    price: "$20.00",
    delivery: "+$2 delivery"
  },
  {
    img: "https://i.pinimg.com/1200x/0b/3f/59/0b3f5986b1f83c67992b36084b0b87d7.jpg",
    name: "Chocolate Heaven",
    properties: ["Rich cocoa", "Premium", "Vegetarian"],
    description: "Deep chocolate taste",
    properties2: ["Dark chocolate", "Brownie bits", "Walnuts"],
    price: "$15.00",
    delivery: "+$2 delivery"
  },
  {
    img: "https://i.pinimg.com/736x/84/6c/16/846c16f31decfedef0f96bf3c9a61dbf.jpg",
    name: "Mango Magic",
    properties: ["Seasonal", "Fruit based", "Refreshing"],
    description: "Real mango pulp",
    properties2: ["Mango chunks", "White chocolate", "Pistachio"],
    price: "$50.00",
    delivery: "+$2 delivery"
  },
  {
    img: "https://i.pinimg.com/1200x/ed/b3/05/edb305358f33916104e541b76d8ff7ee.jpg",
    name: "Pistachio Treat",
    properties: ["Nutty", "Premium", "Creamy"],
    description: "Roasted pistachio blend",
    properties2: ["Pistachio nuts", "Honey", "Choco flakes"],
    price: "$5.00",
    delivery: "+$2 delivery"
  },
  {
    img: "https://i.pinimg.com/1200x/bd/76/54/bd76543030db11c3f7c7bbd85f5d0270.jpg",
    name: "Blueberry Swirl",
    properties: ["Berry rich", "Antioxidant", "Light"],
    description: "Sweet blueberry swirl",
    properties2: ["Blueberry", "Almonds", "Sugar pearls"],
    price: "$40.00",
    delivery: "+$2 delivery"
  },
  {
    img: "https://i.pinimg.com/736x/df/16/69/df1669a77551384e8d21d980af6f8fbd.jpg",
    name: "Butterscotch Joy",
    properties: ["Caramelized", "Crunchy", "Popular"],
    description: "Classic butterscotch crunch",
    properties2: ["Butterscotch", "Caramel sauce", "Peanuts"],
    price: "$30.00",
    delivery: "+$2 delivery"
  },
  {
    img: "https://i.pinimg.com/736x/55/3b/67/553b6716a44c3ed8425566d36ae5f3b1.jpg",
    name: "Mint Choco",
    properties: ["Refreshing", "Cooling", "Bold"],
    description: "Minty chocolate blend",
    properties2: ["Mint flakes", "Dark choco", "Cookie crumbs"],
    price: "$10.00",
    delivery: "+$2 delivery"
  },
  {
    img: "https://i.pinimg.com/736x/26/f3/7a/26f37a0bc23957846dd43118c48de8f3.jpg",
    name: "Coffee Crunch",
    properties: ["Strong coffee", "Energy boost", "Aromatic"],
    description: "Bold coffee notes",
    properties2: ["Coffee beans", "Choco crunch", "Hazelnuts"],
    price: "$20.00",
    delivery: "+$2 delivery"
  },
  {
    img: "https://i.pinimg.com/736x/7d/95/33/7d953352dba1c3dd061c4932565733ad.jpg",
    name: "Berry Mix",
    properties: ["Mixed berries", "Fruity", "Colorful"],
    description: "Berry fusion scoop",
    properties2: ["Strawberry", "Blueberry", "Raspberry"],
    price: "$40.00",
    delivery: "+$2 delivery"
  },
  {
  img: "https://i.pinimg.com/736x/ad/f7/9b/adf79bddfa7def6bd73dc3188d3be687.jpg",
  name: "Tropical Twist",
  properties: ["Tropical fruits", "Refreshing", "Exotic"],
  description: "Island fruit fusion",
  properties2: ["Mango", "Pineapple", "Coconut"],
  price: "$35.00",
  delivery: "+$2 delivery"
},
{
  img: "https://i.pinimg.com/1200x/7f/da/3a/7fda3ad971bb5f46df7a96dd3638357d.jpg",
  name: "Choco Berry Crunch",
  properties: ["Chocolate blend", "Sweet", "Crunchy"],
  description: "Berry chocolate delight",
  properties2: ["Dark chocolate", "Strawberry", "Almond bits"],
  price: "$15.00",
  delivery: "+$2 delivery"
}
];


  return (
    <div className='p-4 flex gap-4 flex-wrap'>
      {iceCreams.map((elem)=>{
        return <Card image={elem.img} name={elem.name} properties={elem.properties} description={elem.description} properties2={elem.properties2} price={elem.price} delivery={elem.delivery}/>
      })}  
    </div>
  )
}

export default App