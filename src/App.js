import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/home";
import About from "./component/pages/About";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Contact from "./component/pages/Contact";
import Adduser from "./component/users/Adduser";
import EditUser from "./component/users/EditUser";
import User from "./component/users/User";

import Register from "./component/pages/Register";

function App() {
  return (

    <Router>
      <div className="App">

          <Navbar/>
          <Routes>

            <Route exact path="/" Component={Home }></Route>
            <Route exact path="/about" Component={About }></Route>
            <Route exact path="/contact" Component={Contact}></Route> 
            <Route exact path="/user/add" Component={Adduser}></Route> 
            <Route exact path="/user/edit/:id" Component={EditUser}></Route> 
            <Route exact path="/user/:id" Component={User}></Route> 


            <Route exact path="/register" Component={Register}></Route> 


          </Routes>

 
      </div>



    </Router>
    
  );
}

export default App;
