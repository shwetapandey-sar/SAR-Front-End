import Login from "./Component/pages/Login";
import './Style.scss'
import Home from "./Component/pages/Home";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Company from "./Component/pages/Company";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="company" element={<Company/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
