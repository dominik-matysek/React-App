// export default function Greeter(props) {
//     // console.log(props.person);
//     return <h1> Hi there, {props.person}! </h1>
// }

// With destructurizing 
export default function Greeter({person, from}) {
    // console.log(props.person);
    return (
        <>
            <h1> Hi there, {person}! </h1>
            <h2>-{from}</h2>
        </>
    );
}