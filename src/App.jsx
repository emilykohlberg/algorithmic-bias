import { useState } from "react";
import NavBar from "./navigation/NavBar";
import BiasPage from "./pages/BiasPage";
import ExamplePage from "./pages/ExamplePage";
import FairnessPage from "./pages/FairnessPage";
import ProcessingPage from "./pages/ProcessingPage";
import About from "./pages/About";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<BiasPage />} />
          <Route path="/examples" element={<ExamplePage />} />
          <Route path="/fairness-metrics" element={<FairnessPage />} />
          <Route path="/processing" element={<ProcessingPage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
