import { Route, Routes } from "react-router-dom";
import { HomePage } from "./../Pages/Home/HomePage";
import { LoginPage } from "./../Pages/Login/Login";
import { CartPage } from "./../Pages/Purchase/CartPage";
import { WishListPage } from "./../Pages/Purchase/Wishlist";
import PrivateRoute from "./ProtectedRoute";
import { SingleProductPage } from "./../Pages/Product/SingleProductPage";
import { AdminPage } from "./../Pages/Admin/Admin";
import { OrderPlacedPage } from "./../Pages/Order/PlacedOrder";
export const AllRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="/" element={<HomePage />} />
      <Route
        path="/cart/:user"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/wishlist/:user"
        element={
          <PrivateRoute>
            <WishListPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/products/:id"
        element={
          <PrivateRoute>
            <SingleProductPage />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/orderplaced/:user"
        element={
          <PrivateRoute>
            <OrderPlacedPage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
