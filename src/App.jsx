import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Routes>
        {/* MainLayout이 부모 Route */}
        <Route element={<MainLayout />}>
          {/* 자식 Route들 — Outlet 자리에 들어옴 */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
