export default function ColorList({colors}){
    // const elements = [<p>Hello!</p>, <h1>Bye!</h1>];
    // const lis = colors.map((color) => <li>{color}</li>);
    return (
        <div>
            <p>Color List</p>
            <ul>{colors.map((c) => (<li style={{color: c}}>{c}</li>))}</ul>

            {/* <ul>{lis}</ul> */}

            {/* {elements} */}

            {/* <p>{colors}</p> */}
        </div>
    );
}