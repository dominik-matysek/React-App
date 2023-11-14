import './App.css'
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import PropertyList from "./PropertyList";
import Clicker from './Clicker';
import Form from './Form';

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const data = [
  {id: 1, item: "eggs", quantity: 12, completed: false},
  {id: 2, item: "milk", quantity: 1, completed: true},
  {id: 3, item: "chicken breasts", quantity: 4, completed: false},
  {id: 4, item: "carrots", quantity: 6, completed: true},
];

function App() {
 return (
  <div>
    {/* <Heading color="magenta" text="Siema" fontSize="20px"/> */}
    {/* When we don't want strings we use {} instead of "" */}
    {/* <Die numSides={20}/>
    <Die numSides={6}/>
    <Die numSides={12}/>
    <Greeter person="Bill" from="Colt"/> */}
    {/* We need {} to pass an array because inside of {} is treated as pure JS (I guess) */}
    {/* {} is a syntax to escape JSX */}
    {/* <ListPicker values={[1, 2, 3]}/>
    <ListPicker values={["a", "b", "c"]}/>     */}
    {/* <ColorList colors={["red", "pink", "purple", "teal"]}/>
    <ColorList colors={["olive", "orangered", "slategrey"]}/> */}
    {/* <Slots val1="a" val2="a" val3="a" />
    <Slots val1="a" val2="b" val3="a" /> */}
    {/* <DoubleDice/>
    <DoubleDice/>
    <DoubleDice/> */}

    {/* <ShoppingList items = {data}/> */}

    {/* <PropertyList properties = {properties}/> */}
    {/* <Clicker/>
    <Form/> */}

  <Clicker message = "HI" buttonText = "Click me"/>
  {/* <Clicker message = "Please stop clicking me" buttonText = "do not click"/> */}

  </div>
 );
}

export default App;
