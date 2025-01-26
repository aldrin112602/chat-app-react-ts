import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "./config.ts";

// Import environment variable
const { googleClientId } = config

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={googleClientId}>
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>
);
