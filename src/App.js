import './App.css';
import {Home} from "./Components/Home/Home"
import {Routes} from "./Routes/Routes";

import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

function App() {
  return (
   <Router>
        <Routes />
        </Router>
  );
}

export default App;
