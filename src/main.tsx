import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./style.css";
import HomeView from "./views/HomeView.tsx";
import GameView from "./views/GameView.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/game" element={<GameView />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
