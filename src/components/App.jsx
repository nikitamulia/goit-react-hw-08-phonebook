import { useSelector } from 'react-redux';
import { useDispatch} from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import authSelectors from "redux/auth/auth-selectors";
import operations from 'redux/auth/auth-operations';
import AppBar from './AppBar/AppBar';
import { Routes, Route, Navigate } from 'react-router-dom';


const Contact = lazy(() => import ("../Pages/ContactsPage"))
const LoginPage = lazy(() => import ("../Pages/LoginPage"))
const RegisterPage = lazy(() => import ("../Pages/RegisterPage"))
const HomePage = lazy(()=> import("../Pages/HomePage") )


export default function App(){
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing)
  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);


  return(
    !isRefreshing && (
           <div>
      <AppBar/>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route
            path="home"
            element={
              <PublicRoute restricted>
                <HomePage/>
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </Suspense>
    </div>
    )
   )
}


