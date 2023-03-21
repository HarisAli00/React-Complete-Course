const Ternary = () => {
    let name = "ghayur";
    let chkName = name == "ghayur" ? "hi Ghayur" : "hi friend";
    const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
    return (
        <div>
            <h1>{chkName}</h1>
            <h2>random no 1: {Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"} random no 2: {getRandomNumber()}</h2>
        </div>
    );
}

export default Ternary;