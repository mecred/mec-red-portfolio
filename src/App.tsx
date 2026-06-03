import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import LegendesLayout from './projects/legendes-animees/Layout';
import LegendesHome from './projects/legendes-animees/pages/Home';
import LegendesDetail from './projects/legendes-animees/pages/ProjectDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Portfolio */}
        <Route path="/" element={<Portfolio />} />

        {/* Légendes Animées Project (Integrated) */}
        <Route path="/legendes-animees" element={<LegendesLayout />}>
          <Route index element={<LegendesHome />} />
          <Route path="project/:slug" element={<LegendesDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}
