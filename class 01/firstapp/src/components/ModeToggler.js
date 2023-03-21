const ModeToggler = () => {
    let mode = false;
    const darkMode = <h1> Dark Mode On.</h1>;
    const lightMode = <h1> Light Mode On.</h1>;
    const clickHandler = () => {
         mode = !mode;
        if(mode){
            console.log("dark mode on");
        } else{
            console.log("light mode on");
        }
    }
    return (
        <>
            {mode ? darkMode : lightMode};
            <button onClick={clickHandler} >Click Me</button>
        </>
    );
}

export default ModeToggler;