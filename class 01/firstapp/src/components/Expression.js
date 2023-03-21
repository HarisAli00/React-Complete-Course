const Expression = (props) => {
    return (
        <>
            <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
            <h2>The value of the toggleBoolean prop is: {props.math}</h2>
            <h2>The value of the toggleBoolean prop is: {props.str}</h2>
        </>
    );
}

export default Expression;