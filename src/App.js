import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productsinputs, userinputs } from "./formdata";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />}/>
          
         <Route path="users">
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New inputs = {userinputs} title="Add New User"/>}/>
          </Route>

         <Route path="products">
          <Route index element={<List/>}/>
          <Route path=":productsId" element={<Single/>}/>
          <Route path="new" element={<New inputs = {productsinputs} title="Add New Product"/>}/>
        
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
