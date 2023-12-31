import Login from "./pages/Login"
import Register from "./pages/Register"
import Main from "./pages/Main"
import CatImage from "./pages/CatImage"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cat_image" element={<CatImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
