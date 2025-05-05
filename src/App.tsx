import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function App() {
  const [cartCount, setCartCount] = useState<number>(0);
  return (
    <>
      <Navbar setCartCount={setCartCount} cartCount={cartCount} />
      <ProductDetail setCartCount={setCartCount} cartCount={cartCount} />
    </>
  );
}
