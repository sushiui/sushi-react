import "./App.css";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/button' element={<ButtonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
