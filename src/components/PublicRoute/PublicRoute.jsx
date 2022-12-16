import { useSelector } from "react-redux";
import {Route, Navigate} from 'react-router-dom';
import authSelectors from "redux/auth/auth-selectors";


export default function PublicRoute({
    children,
    restricted = false,
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shoulRedirect = isLoggedIn && restricted;
    return shoulRedirect ? <Navigate to="/contacts"/> : children;
}
