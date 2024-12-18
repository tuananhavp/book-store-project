import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return children;
  } else {
    return <Navigate to={"/login"} replace></Navigate>;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
