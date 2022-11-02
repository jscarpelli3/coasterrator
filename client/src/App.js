import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideSearch from "./components/SideSearch";
import Detail from "./components/Detail";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Main />
        {/* <Routes>
          <Route path="/coaster" element={<Detail />} />
        </Routes> */}
      </main>
    </div>
  );
}

export default App;
