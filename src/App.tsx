import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./views/auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
