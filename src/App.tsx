import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import { RMImagePage } from "./pages/index";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/image" element={<RMImagePage></RMImagePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
