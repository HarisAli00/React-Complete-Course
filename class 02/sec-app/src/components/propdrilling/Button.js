function Button(props){
    return(
        <div style={{ border: "20px solid orange" }}>
            <h3>This is the Button component</h3>
            <button onClick={() => alert(props.msg)}>Click Me!</button>
        </div>
    );
}

export default Button;