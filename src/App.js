import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthScreen from "./components/AuthScreen";
import ViewProjects from "./components/ViewProjects";
import AddProjects from "./components/AddProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/projects" element={<ViewProjects />} />
        <Route path="/createprojects" element={<AddProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
