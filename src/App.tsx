import "./App.css";
// import AppButton from "./shared/components/app_button";
// import LampContainer from "./shared/landing-page/lamp_container";
import LandingPage from "./shared/landing-page/landing_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./ui/signup/signup_form";
import Providers from "./shared/providers";

function App() {
  return (
    <Providers>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<>Login Page</>} />
          <Route path="*" element={<>404!, Not Found</>} />
        </Routes>
      </Router>
    </Providers>
  );
}

export default App;
