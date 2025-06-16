import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import AuthScreen from "./components/AuthScreen";
import ViewProjects from "./components/ViewProjects";
import AddProjects from "./components/AddProject";

const AppWrapper = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  useEffect(() => {
    instance.handleRedirectPromise().then((response) => {
      if (response !== null) {
        instance.setActiveAccount(response.account);
        // 🎯 After login success, redirect to /projects
        navigate('/projects');
      } else {
        const account = instance.getAllAccounts()[0];
        if (account) {
          instance.setActiveAccount(account);
          // 🎯 Already logged in? Go to /projects
          navigate('/projects');
        }
      }
    });
  }, [instance, navigate]);

  return (
    <Routes>
      <Route path="/" element={<AuthScreen />} />
      <Route path="/projects" element={<ViewProjects />} />
      <Route path="/createprojects" element={<AddProjects />} />
    </Routes>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
