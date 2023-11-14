function handleClick() {
    console.log("Clicked the button")
}

function handleHover() {
    console.log("HOVERED!")
}

// Any of the DOM events can be used in React similar way they are used in pure JS - tho they need to be camelCased
export default function Clicker({message, buttonText}) {
    const handleClickAgain = () => {
        alert(message);
    }
    return (
        <div>
            {/* <p onMouseOver = {handleHover}>Hover over me</p> */}
            {/* Difference between using handleClick and handleClick() below:
            - handleClick passes the name of the function
            - handleClick() immediately executes the function, so it runs once when the page is refreshed, and does not react on clicking*/}
            {/* <button onClick={handleClick}>Click</button> */}
            <button onClick = {handleClickAgain}>{buttonText}</button>

        </div>
    )
}