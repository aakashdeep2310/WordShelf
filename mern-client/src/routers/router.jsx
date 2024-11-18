import App from "../App.jsx";
import Home from "../home/home.jsx";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";++
import Shop from "../shop/shop.jsx";
import Promo from "../promo/promo.jsx";
import About from "../components/About.jsx";
import Blog from "../components/Blog.jsx";
import SingleBook from "../shop/SingleBook.jsx";
import DashBoardLayout from "../dashboard/DashBoardLayout.jsx";
import Dashboard from '../dashboard/Dashboard.jsx';
import UploadBook from "../dashboard/UploadBook.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import SignIn from "../dashboard/Signin.jsx";
import Users from "../dashboard/Users.jsx";
import Products from "../dashboard/Products.jsx";

const router = createBrowserRouter([

  // for frontend
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },{
        path: "/book/:id",
        element:<SingleBook/>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)

      },
      {
        path: "/promo",
        element: <Promo/>
      }
    ],
  },
  // for admin
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout/>,
    children:[
      {
        path: "/admin/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook/>
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks/>
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks/>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)

      },
      {
        path: "/admin/dashboard/signin",
        element: <SignIn/>,
      },
      {
        path: "/admin/dashboard/users",
        element: <Users/>
      },
      {
        path: "/admin/dashboard/products",
        element: <Products/>
      }

    ]
  }
]);

export default router;
