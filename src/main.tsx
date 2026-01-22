import React from "react";
import ReactDOM from "react-dom/client"; // ← importante: /client
import "./styles/global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Posts from "./components/Post";
import Redirect from "./components/Redirect";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
