import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "./components/Form";
import { createGlobalStyle } from "styled-components";
import { Etiquetas } from "./components/Etiquetas/Etiquetas";
import { Header } from './components/Header';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter";
    font-style: normal;
  }
`;

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/etiquetas" element={<Etiquetas />} />
      </Routes>
    </Router>
  );
}
