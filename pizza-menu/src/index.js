import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' }
  const style = {}
  return (
    <div className='header' >
      <h1 style={style}>
        Pizza Pallet
      </h1>
    </div>)
}


function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza name="Pizza Spinaci"
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, Mozarella, Mushrooms, Olives"
        price={10}
      />
      <Pizza name="Pizza Funghi"
        ingredients="Tomato, Hemp, Mushrooms, Olives"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
    </main>
  )
}

function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name} />
      <div>

        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  )
}




function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  let status = hour >= openHour && hour < closeHour ? 'Open' : 'Closed'

  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()} We're Currently {status}
    </footer>
  )
}




function App() {
  return (<div>
    <Header />
    <Menu />
    <Footer />
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
