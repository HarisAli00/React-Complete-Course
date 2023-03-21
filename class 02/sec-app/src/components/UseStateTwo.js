import { useState } from "react";

function UseStateTwo(){
    const [userInfo, setUserInfo] = useState({
        userName: "ghayur",
        userLastName: "adil",
        userEmail: "ghayuransari@gmail.com"
    });
    
    return (
        <>
        User name:
        <input value={userInfo.userName} onChange={e => setUserInfo({...userInfo,userName: e.target.value})} />
        User last name:
        <input value={userInfo.userLastName} onChange={e => setUserInfo({...userInfo,userLastName: e.target.value})} />
        User email:
        <input value={userInfo.userEmail} onChange={e => setUserInfo({...userInfo,userEmail: e.target.value})} />
        <br />
        Result:
            <h1>{userInfo.userName}</h1>
            <h1>{userInfo.userLastName}</h1>
            <h1>{userInfo.userEmail}</h1>
        </>
    );
}

export default UseStateTwo;