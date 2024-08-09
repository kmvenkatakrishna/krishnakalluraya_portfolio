import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import About from "./About/about";
import Header from "./Header/header";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Header/>
                <Home />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
