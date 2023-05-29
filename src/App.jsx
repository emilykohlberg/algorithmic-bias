import { useState } from "react";
import NavBar from "./navigation/NavBar";
import BiasPage from "./pages/BiasPage";
import ExamplePage from "./pages/ExamplePage";
import ProcessingPage from "./pages/ProcessingPage";
import SocietyPage from "./pages/SocietyPage";
import TechnicalPage from "./pages/TechnicalPage";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<BiasPage />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route path="/processing" element={<ProcessingPage />} />
          <Route path="/society" element={<SocietyPage />} />
          <Route path="/technical" element={<TechnicalPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
