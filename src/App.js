import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Temoignages from "./components/Temoignages";
import TemoignagePage from "./components/TemoignagePage";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Temoignages} />
        <Route exact path="/temoignage/:id" component={TemoignagePage} />
      </>
    </Router>
  );
}

export default App;
