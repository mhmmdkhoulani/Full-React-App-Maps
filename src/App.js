import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./pages/Login";
import AllBooks from "./pages/dashboard/allBooks";
import AddBook from "./pages/dashboard/AddBook";
import EditBook from "./pages/dashboard/EditBook";
import Logout from "./pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/allBooks",
        element: <AllBooks />,
      },
      {
        path: "/dashboard/add-book",
        element: <AddBook />,
      },
      {
        path: "/dashboard/edit-book/:id",
        element: <EditBook />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
