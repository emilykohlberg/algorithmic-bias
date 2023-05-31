import { useState } from "react";
import NavBar from "./navigation/NavBar";
import BiasPage from "./pages/BiasPage";
import ExamplePage from "./pages/ExamplePage";
import FairnessPage from "./pages/FairnessPage";
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
          <Route path="/examples" element={<ExamplePage />} />
          <Route path="/social-impacts" element={<SocietyPage />} />
          <Route path="/fairness-metrics" element={<FairnessPage />} />
          <Route path="/processing" element={<ProcessingPage />} />
          <Route path="/technical" element={<TechnicalPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
