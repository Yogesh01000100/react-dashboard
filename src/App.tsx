import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UserFormPage from "./pages/UserFormPage";
import RichTextPage from "./pages/RichTextPage";
import DashboardPage from "./pages/DashboardPage";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/counter" element={<HomePage />} />
        <Route path="/form" element={<UserFormPage />} />
        <Route path="/editor" element={<RichTextPage />} />
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
