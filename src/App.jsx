import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import Clients from "./pages/Clients";
import QrCode from "./pages/QrCode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blogs /> },
      { path: "/blogpage/:id", element: <BlogPage /> },
      { path: "/clients", element: <Clients /> },
      { path: "/qr", element: <QrCode /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
