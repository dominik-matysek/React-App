// Different ways for simple dice game below

export default function DoubleDice() {
    const num1 = Math.floor(Math.random()*3) + 1;
    const num2 = Math.floor(Math.random()*3) + 1;
    const isWinner = num1 ===num2;
    // In general: if we want regular styles - use .css file
    // if we want styles that may change depending on what is going on in code (like below) use style attribute
    const styles = {color: isWinner ? "green" : "red"};
    return (
        <div className="DoubleDice" style = {styles}>
            <h2>Double Dice</h2>
            {isWinner && <h3>You win!</h3> }
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
}

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random()*3) + 1;
//     const num2 = Math.floor(Math.random()*3) + 1;
//     return (
//         <div>
//             <h2>Double Dice</h2>
//             {num1 === num2 ? <h3>You win!</h3>: null}
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     );
// }

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random()*3) + 1;
//     const num2 = Math.floor(Math.random()*3) + 1;
//     const result = num1 === num2 ? "You win!" : "You lose :(";
//     return (
//         <div>
//             <h2>{num1 === num2 ? "You win!" : "You lose :("}</h2>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     );
// }


// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random()*3) + 1;
//     const num2 = Math.floor(Math.random()*3) + 1;
//     const result = num1 === num2 ? "You win!" : "You lose :(";
//     return (
//         <div>
//             <h2>{result}</h2>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     );
// }