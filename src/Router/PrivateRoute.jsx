import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();

    if (loading) {
        return (
            <Spinner />
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/loginLayout" replace></Navigate>;
};

export default PrivateRoute;