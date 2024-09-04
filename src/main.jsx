import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./Contexts/ProductContext.jsx";
import { SideBarProvider } from "./Contexts/SideBarContext.jsx";
import { CartProvider } from "./Contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>
);
