import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Product from "./pages/Product/Product.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./app.scss"

const Layout = () =>{
  return (
    <div className="app">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
    ]
  },
  
])

function App() {
  return(
    <div>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
