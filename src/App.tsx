
import './App.css'
import { Footer, Menu, Navbar } from './components';
import { Home, Products, Users, Login } from './pages'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


function App() {

  const Layout = () => {

    return (
      <main className="main font-inter bg-main-bg text-main-color">
        <Navbar />
        <div className='container flex'>
          <div className='menu w-64 py-2 px-5 border-r-2 border-soft-bg'>
            <Menu />
          </div>
          <div className='content py-2 px-5 w-full'>
          <Outlet />
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    }

  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
