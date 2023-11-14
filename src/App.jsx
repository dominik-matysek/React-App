import './App.css'
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';


function App() {
 return (
  <div>
    {/* When we don't want strings we use {} instead of "" */}
    {/* <Die numSides={20}/>
    <Die numSides={6}/>
    <Die numSides={12}/> */}
    {/* <Greeter person="Bill" from="Colt"/> */}
    {/* We need {} to pass an array because inside of {} is treated as pure JS (I guess) */}
    {/* {} is a syntax to escape JSX */}
    {/* <ListPicker values={[1, 2, 3]}/>
    <ListPicker values={["a", "b", "c"]}/> */}
    {/* Below {} is a syntax to escape JSX AND THEN a JS object */}
    {/* <ListPicker values={{a: 1, b: 2}}/> */}

    <DoubleDice/>
    <DoubleDice/>
    <DoubleDice/>

  </div>
 );
}

export default App;
