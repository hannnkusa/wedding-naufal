import "./App.css";
// import AppButton from "./shared/components/app_button";
// import LampContainer from "./shared/landing-page/lamp_container";
import LandingPage from "./shared/landing-page/landing_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
