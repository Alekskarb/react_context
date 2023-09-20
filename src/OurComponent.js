import './App.css';
import {useContext} from "react";
import {ContextData} from "./App";

function getTheme(theme) {
    return {
        background: theme ? "#000" : '#fff',
        color: theme ? '#fff' : "#000",

    }
}

function OurComponent() {
    const passedValue = useContext(ContextData);
    console.log(passedValue)
    return (
        <div style={getTheme(passedValue.dark)} className="App">
            OurComponent
            <button onClick={passedValue.changeTheme}>change Theme</button>
        </div>
    );
}

export default OurComponent;
