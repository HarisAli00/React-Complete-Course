import { useState } from "react";

function UseStateThree() {

    const [changeMe, setChangeMe] = useState("change me 😒");
    const clickHandler = () =>{
        setChangeMe("i am changed..... 😊");
    }
    return (
        <>
            <h1>this is heading : {changeMe}</h1>
            <button onClick={clickHandler}> click me bro</button>
        </>
    );
}

export default UseStateThree;