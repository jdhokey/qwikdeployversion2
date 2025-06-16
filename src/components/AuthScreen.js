import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig.js";
import logo from "../components/images/image 163.png";
import logo1 from "../components/images/shutterstock_478591123_lo.png";

const AuthScreen = () => {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();

  // Redirect to /projects if already logged in
  useEffect(() => {
    if (accounts.length > 0) {
      navigate("/projects");
    }
  }, [accounts, navigate]);

  const handleSignIn = async () => {
    try {
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", background: "white", display: "flex", flexDirection: "column", overflowY: "auto" }}>
      {/* Navbar */}
      <div style={{ width: "100%", height: 60, background: "white", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", display: "flex", alignItems: "center", padding: "0 20px" }}>
        <img src={logo} alt="Logo" style={{ width: 120, height: "auto" }} />
        <div style={{ width: 2, height: 30, background: "black", margin: "0 20px" }} />
        <div style={{ color: "black", fontSize: 24, fontFamily: "Open Sans", fontWeight: "400" }}>QwikDeploy</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", padding: "40px 100px" }}>
        {/* Image */}
        <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center", alignItems: "center", padding: 20 }}>
          <img src={logo1} alt="Illustration" style={{ width: "100%", maxWidth: 400, height: "auto" }} />
        </div>

        {/* Sign-in Button */}
        <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", alignItems: "center", padding: 20 }}>
          <div style={{ width: "100%", maxWidth: 500 }}>
            <button
              onClick={handleSignIn}
              style={{
                width: "100%",
                height: 45,
                background: "#26890D",
                color: "white",
                fontSize: 20,
                fontFamily: "Open Sans",
                fontWeight: "500",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
                marginBottom: 20
              }}
            >
              Sign In with Deloitte SSO
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "20px 40px", fontSize: 12, color: "black", textAlign: "center", fontFamily: "Open Sans", background: "#f9f9f9" }}>
        {/* Footer content here */}
      </div>
    </div>
  );
};

export default AuthScreen;
