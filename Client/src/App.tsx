import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Component1 from "./components/MainHeader/MainHeader";

export default function App() {
  return (
    <div>
      <div><Component1/></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
