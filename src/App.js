import Login from "./pages/Login"
import Register from "./pages/Register"
import Main from "./pages/Main"
import CatImage from "./pages/CatImage"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/cat_image">
          <CatImage />
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
