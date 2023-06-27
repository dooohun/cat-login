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
        <Route path={process.env.PUBLIC_URL + "/register"} element={<Register />} />
        <Route path={process.env.PUBLIC_URL + "/login"} element={<Login/>} />
        <Route path={process.env.PUBLIC_URL + "/cat_image"} element={<CatImage />} />
        <Route path={process.env.PUBLIC_URL + "/"} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
