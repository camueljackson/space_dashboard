import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { NearEarthObjects } from "./pages/nearEarthObjects/index";
import { Pod } from "./pages/pod/index";
import { LayoutDesign } from "./layoutDesign/index";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <LayoutDesign>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/neos" element={<NearEarthObjects />} />
        <Route path="/pod" element={<Pod />} />
      </Routes>
    </LayoutDesign>
  </BrowserRouter>,
  rootElement
);
