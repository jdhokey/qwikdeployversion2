import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMsal } from "@azure/msal-react"; // required for handling redirect
import AuthScreen from "./components/AuthScreen";
import ViewProjects from "./components/ViewProjects";
import AddProjects from "./components/AddProject";

function App() {
  const { instance } = useMsal();

  useEffect(() => {
    instance.handleRedirectPromise().then((response) => {
      if (response !== null) {
        instance.setActiveAccount(response.account);
      }
    });
  }, [instance]);

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
