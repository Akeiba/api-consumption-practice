import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import User from "./components/User";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Akeiba's API Consumption Practice</p>
        </header>

        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/user/:id" element={<User />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
