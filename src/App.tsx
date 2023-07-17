import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import { RMImagePage } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RMImagePage></RMImagePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
