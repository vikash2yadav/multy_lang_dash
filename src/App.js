import "./app.scss"
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "./routes/route";
import { useEffect } from "react";

function App() {
  let location = useLocation();
  let navigate = useNavigate();
  var allowPath = ["/login", "/register", "/forgot_password", "/reset_password" ];

  useEffect(() => {
    if (localStorage.getItem("authorization")) {
      if (allowPath.includes(location.pathname)) {
        return navigate("/dashboard");
      }
    } else {
      if (! allowPath.includes(location.pathname)) {
        return navigate("/login");
      }
    }
  });

  const getRoutes = (routes) =>
    routes?.map((route) => {
      if (route?.collapse) {
        return getRoutes(route?.collapse);
      }

      if (route?.link) {
        return <Route exact path={route?.link} element={route?.component} key={route?.key} />;
      }

      return null;
    });

  return (
    <>
      {/* {localStorage.getItem("authorization") && <Sidebar />} */}
      <Routes>
        {getRoutes(routes)}
        {localStorage.getItem("authorization") && <Route path="*" element={<Navigate to="/dashboard" />} />}
      </Routes>
    </>
  );
}
export default App;
