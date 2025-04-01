import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import AppRoutes from "./Routes/routes";
import ProgressBar from "./Layouts/ProgressBar";
import Preloader from "./Layouts/PreLoader";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.init({
      disable: "mobile",
    });
  }, []);

  document.body.className = "homepage1-body";

  return (
    <Router>
      <ProgressBar />
      <Preloader />
      <AppRoutes />
    </Router>
  );
};

export default App;
