
import './App.css'
import { Footer, Menu, Navbar } from './components';
import { Home, Products, Users } from './pages'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
// import { createRoot } from "react-dom/client";

function App() {

  const Layout = () => {

    return (
      <main className="main">
        <Navbar />
        <div className=''>
          <div className='menu'>
            <Menu />
          </div>
          <div className='content'>
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
      element: <Layout />
    }

  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
