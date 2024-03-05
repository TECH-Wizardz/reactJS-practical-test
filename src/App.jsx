import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddUsers from "./components/AddUsers";
import AddHobby from "./components/AddHobby";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/users" element={<AddUsers />} />
          <Route path="/hobbies" element={<AddHobby />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
