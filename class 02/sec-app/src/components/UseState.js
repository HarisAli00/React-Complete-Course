import { useState } from 'react';

function InputComponent() {
    const [inputText, setText] = useState('type Your Name..')
    function clickHandle(e){
        console.log(inputText);
        setText(e.target.value);
    }
    return (
        <>
            <input value={inputText} type="text" onChange={clickHandle} />
            <h1>your type: {inputText}</h1>
            <button onClick={() => setText('type Your Name..')}>reset</button>
        </>
    );
}

export default InputComponent;