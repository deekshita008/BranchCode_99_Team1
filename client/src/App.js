import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import LoginForm from "./Components/Login/LoginForm";
import RegisterForm from "./Components/Register/RegisterForm";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Sidebar />
        <div className="main-container">
        <LoginForm />
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: (
      <>
        <Header />
        <Sidebar />
        <div className="main-container">
        <RegisterForm />
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <div className="grid-container">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
