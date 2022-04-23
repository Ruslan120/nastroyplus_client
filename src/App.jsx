import {Route,Routes} from "react-router-dom";
import Main from "./Main";
import About from "./About";



function App() {
  return (
      <div>
          <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/main" element={<Main/>}/>
          </Routes>
      </div>

  );
}
export default App;
