import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Header,
  Home,
  Login,
  Cart,
  Footer,
  Products,
  ProductDetails,
  ProductList,
  LimitedEdition,
  LimitedEditionList,
} from "./FileExporter/ComponentExporter";
import { DataProvider } from "./Context/DataContext";
import { CartProvider } from "./Context/CartContext";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const NotFound = () => <h4> Oops! Page not found </h4>;

  return (
    <div>
      <CartProvider>
        <DataProvider>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Products" element={<Products />}>
              <Route path="/" element={<ProductList />} />
              <Route path=":productID" element={<ProductDetails />} />
            </Route>
            <Route path="LimitedEdition" element={<LimitedEdition />}>
              <Route path="/" element={<LimitedEditionList />} />
              <Route path=":productID" element={<ProductDetails />} />
            </Route>
            <Route path="Login" element={<Login />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </DataProvider>
      </CartProvider>
    </div>
  );
}
