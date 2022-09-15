import ReactSwitch from "react-switch";
import "./App.css";
import Form from "./components/Form";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="App" id={theme}>
      <Form />
      <div className="switch">
        <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
      </div>
    </div>
  );
}

export default App;
