import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/EmployeeList";
import User from "./pages/Employee";
import NewUser from "./pages/NewEmployee";
import ProductList from "./pages/ProductList";
import Login from "./Login";
import Register from "./Register";
import Chart from "./components/Charts";
import FeaturedInfo from "./components/FeaturedInfo";
function App() {
  return (
    
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/sales" element={<FeaturedInfo />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;  