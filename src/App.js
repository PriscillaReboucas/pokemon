import Home from "./pages/home/index";
import Pokemon from "./pages/profile";
import { Route, Routes } from "react-router-dom";
import HeaderMenu from "./components/navigation/header";

function App() {
  return (
    <section>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:name" element={<Pokemon />} />
      </Routes>
    </section>
  );
}

export default App;
