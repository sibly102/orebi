
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout.jsx'
import About from "../src/pages/About.jsx"
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact.jsx'
import Offers from './pages/Offers.jsx'
import Order from './pages/Order.jsx'
import Product from './pages/Product.jsx'
import Profile from './pages/Profile.jsx'
import Shop from './pages/Shop.jsx'
import Signin from './pages/Signin.jsx'
import SignUp from './pages/SignUp.jsx'
import SingleProduct from './pages/SingleProduct.jsx'


const router = createBrowserRouter([
  {
   path: "/",
   element: <RootLayout/>,
   children: [
    { path: "/", element: <App />},
    { path: "/about", element: <About />},
    { path: "/cart", element: <Cart />},
    { path: "/contact", element: <Contact />},
    { path: "/offers", element: <Offers />},
    { path: "/order", element: <Order />},
    { path: "/product", element: <Product />},
    { path: "/profile", element: <Profile />},
    { path: "/shop", element: <Shop />},
    { path: "/signin", element: <Signin />},
    { path: "/signup", element: <SignUp />},
    { path: "/product/:id", element: <SingleProduct />},
  ],
  },
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
