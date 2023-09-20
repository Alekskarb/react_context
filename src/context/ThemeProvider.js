import {createContext, useContext, useState} from "react";

export const ContextData = createContext();
export const UpdateContextData = createContext();

export function useTheme() {
    return useContext(ContextData);
}
export function useUpdateTheme() {
    return useContext(UpdateContextData);
}

export function ThemeProvider({children}) {
    const [dark, setDark] = useState(false);
    const changeDark = () => setDark((s) => !s);

    return (
        <ContextData.Provider value={dark}>
            <UpdateContextData.Provider value={changeDark}>
                {children}
            </UpdateContextData.Provider>
        </ContextData.Provider>
    )
}
