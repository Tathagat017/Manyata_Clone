import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Manyata";
  }, []);
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
