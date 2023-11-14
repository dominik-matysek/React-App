import './App.css'
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';


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

    <Slots val1="a" val2="a" val3="a" />
    <Slots val1="a" val2="b" val3="a" />

    {/* <DoubleDice/>
    <DoubleDice/>
    <DoubleDice/> */}

  </div>
 );
}

export default App;
