import {useState} from "react";
export default function Counter() {
    // The way useState works is basically like this (watch video 635 if you dont understand):
    // everytime setNum is executed the entire function 'Counter' is rerendered, so all the code runs again
    // but useState is smart enough not to change the value in () to e.g. 5 again. Instead new number
    // like num+1 is used. BUT the num won't be equal to num+1 before rerender(before useState is run again)
    const [num, setNum] = useState(5);

    const changeNum =() => {
        // This is actually not the recommended way to do things like incrementation etc, but more about it later
        setNum(num+1);
    }
    return (
        <div>
        <p>The count is: {num}</p>
        <button onClick={changeNum}>Increment</button>
        </div>
    )
}