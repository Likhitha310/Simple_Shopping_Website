const React = require('react');
const { BrowserRouter: Router, Routes, Route } = require('react-router-dom');
const NavBar = require('./components/NavBar');
const Home = require('./pages/Home');
const Products = require('./pages/Products');
const Cart = require('./pages/Cart');
const Login = require('./pages/Login');
const Register = require('./pages/Register');

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

module.exports = App;
