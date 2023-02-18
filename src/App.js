import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Ecommerce from "./pages/Ecommerce";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import RestaurantQr from "./pages/RestaurantQr";
import GraphicDesign from "./pages/GraphicDesign";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/webdesign">
        <WebDesign />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/aboutus">
        <Aboutus />
      </Route>
      <Route path="/ecommerce">
        <Ecommerce />
      </Route>
      <Route path="/restaurant">
        <RestaurantQr />
      </Route>
      <Route path="/graphicdesign">
        <GraphicDesign />
      </Route>
    </Router>
  );
}

export default App;
