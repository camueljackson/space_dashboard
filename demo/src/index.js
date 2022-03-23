import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Telescope } from "./pages/telescope/index";
import { LayoutDesign } from "./layoutDesign/index";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <LayoutDesign>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/telescope" element={<Telescope />} />
      </Routes>
    </LayoutDesign>
  </BrowserRouter>,
  rootElement
);
