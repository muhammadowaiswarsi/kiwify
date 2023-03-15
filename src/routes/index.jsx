import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import { Route, Routes as ReactRoutes } from "react-router-dom";

function CustomRoutes() {
  const unAuthorizedRoutes = [
    {
      path: "/",
      renderer: () => <Login />,
    },
    {
      path: "/signup",
      renderer: () => <Signup />,
    },
    {
      path: "*",
      renderer: () => <Login />,
    },
  ];
  return (
    <ReactRoutes>
      {unAuthorizedRoutes?.map((item) => (
        <Route key={item.path} path={item.path} element={item.renderer()} />
      ))}
    </ReactRoutes>
  );
}

export default CustomRoutes;
