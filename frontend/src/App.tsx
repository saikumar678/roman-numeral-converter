import React from "react";
import { Provider, defaultTheme, darkTheme } from "@adobe/react-spectrum";
import RomanConverter from "./components/RomanConverter";

function App() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <Provider theme={prefersDark ? darkTheme : defaultTheme} colorScheme={prefersDark ? "dark" : "light"}>
      <RomanConverter />
    </Provider>
  );
}

export default App;
