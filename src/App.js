import './App.css';
// import {createContext, useState} from "react";
import OurComponent from "./OurComponent";
import {ThemeProvider, useUpdateTheme} from "./context/ThemeProvider";

// export const ContextData = createContext('alex');

function App() {


  return (
    <>
        <ThemeProvider>
            <Home/>
        </ThemeProvider>
        <ThemeProvider>
            <About/>
        </ThemeProvider></>
  );
}
function Home() {
  const changeDark = useUpdateTheme();

  return (
      <div className="App">
        <button onClick={changeDark}> create Context </button>
        <OurComponent/>
      </div>
  )
}
function About() {
  const changeDark = useUpdateTheme();

  return (
      <div className="App">
        <button onClick={changeDark}> create Context </button>
        <OurComponent/>
      </div>
  )
}

export default App;
