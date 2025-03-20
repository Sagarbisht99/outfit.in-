import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
// import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
// import Footer from "./Components/Footer";
import Payment from "./Pages/Payment";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <SideBar />
      {/* <Footer /> */}
    </Router>
  );
};

export default App;

