import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Animation from "./Router/Animation";
function App() {

  return (
    <div className="App">
      <Router>
        <Animation/>
      </Router>
    </div>
  );
}

export default App;
