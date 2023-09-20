import './App.css';
import {createContext, useState} from "react";
import OurComponent from "./OurComponent";

// export const ContextData = createContext('alex');
export const ContextData = createContext();

function App() {
  const [dark, setDark] = useState(false)
  const changeDark = ()=> setDark((s)=>!s);

  return (
      <ContextData.Provider value={{
        dark,
        changeTheme: ()=> setDark(b => !b)
      }}>
      {/*<ContextData.Provider >*/}
    <div className="App">
      <button onClick={changeDark}> create Context </button>
      <OurComponent/>
      <OurComponent/>
      <OurComponent/>
    </div>
      </ContextData.Provider>
  );
}

export default App;
