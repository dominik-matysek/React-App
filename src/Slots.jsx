export default function Slots({val1, val2, val3}) {
    const result = val1 === val2 && val1 === val3;
    const style = {color: result ? "green" : "red"};
    return (
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={style}>{result ? "You win" : "You lose"}</h2>
            {result && <h3>Congrats</h3> }
        </div>
    );
}