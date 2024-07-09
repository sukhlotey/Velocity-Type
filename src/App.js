import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Typing from "./components/typing/Typing";
import Result from "./components/result/Result";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage/>}/>
          <Route path="/typing" exact element={<Typing/>}/>
          <Route path="/result" exact element={<Result />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
