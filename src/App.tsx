import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import { ExperiencePage, HomePage, ProjectPage, RMImagePage } from "./pages/index";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/experience" element={<ExperiencePage></ExperiencePage>}></Route>
        <Route path="/project" element={<ProjectPage></ProjectPage>}></Route>
        <Route path="/image" element={<RMImagePage></RMImagePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
