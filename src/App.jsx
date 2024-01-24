import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/cartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [darkMode, setDarkMode] = useState(true);

  const movieValues = { state, dispatch };
  const themeValues = { darkMode, setDarkMode };

  return (
    <ThemeContext.Provider value={themeValues}>
      <MovieContext.Provider value={movieValues}>
        <Page />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
