import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappPopup from "./components/WhatsappPopup";

import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="my-5">
        <Home /> 
        <WhatsappPopup /> 
      </main>
      <Footer /> 
    </BrowserRouter>
  );
};

export default App;
