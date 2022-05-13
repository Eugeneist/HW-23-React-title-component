// Style solution:

const Title = ({ name, type = "normal" }) => {

    return (
        <h2 style = {{ fontWeight: type }}>
            Hello, {name}!
        </h2>
    );
}


// Class solution:

// const Title = ({ name, type = "normal" }) => {
//     const className = type === "bold" ? "bold" : "normal";

//     return (
//         <h1 className={className}>
//             Hello, {name}!
//         </h1>
//     );
// }

export default Title;