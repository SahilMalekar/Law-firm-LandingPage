import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div>
      <StyledEngineProvider>
        <Outlet />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
