import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/admin" />;
  }
  return children ? children : <Outlet />;
};

export default AdminRoute;

AdminRoute.PropTypes = {
  children: PropTypes.any,
};
