// import './App.css';
// import {useContext} from "react";
// import {ContextData} from "./App";
import {useTheme, useUpdateTheme} from "./context/ThemeProvider";

function getTheme(theme) {
    return {
        background: theme ? "#000" : '#fff',
        color: theme ? '#fff' : "#000",

    }
}

function OurComponent() {
    // const passedValue = useContext(ContextData);
    const dark = useTheme();
    const changeTheme = useUpdateTheme();
    // console.log(passedValue)
    return (
        <div style={getTheme(dark)} className="App">
            OurComponent
            <button onClick={changeTheme}>change Theme</button>
        </div>
    );
}

export default OurComponent;
