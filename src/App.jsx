import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/ui/Home";
import Order from "./features/order/Order";
import Cart from "./features/cart/Cart";
import Menu, { loader as menuLoad } from "./features/menu/Menu";
import CreateOrder, { createOrderAction } from "./features/order/CreateOrder";
import AppLayout from "./features/ui/AppLayout";
import NotFound from "./features/ui/Error";
import { getOrderFn } from "./features/order/SearchOrder";
// import User from "./features/user/User";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        loader: menuLoad,
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: getOrderFn,
        errorElement: <NotFound />,

      },

      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);

const Header = () => {
  return (
    <header>
      <h1>Fast React Pizza</h1>
    </header>
  );
};

function App() {
  return <RouterProvider router={router} />;
}

export default App;
