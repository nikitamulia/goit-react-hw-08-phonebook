import { useSelector } from 'react-redux';
import { useDispatch} from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import authSelectors from "redux/auth/auth-selectors";
import operations from 'redux/auth/auth-operations';
import AppBar from './AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';


const Contact = lazy(() => import ("../Pages/ContactsPage"))
const LoginPage = lazy(() => import ("../Pages/LoginPage"))
const RegisterPage = lazy(() => import ("../Pages/RegisterPage"))


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
            path="/contacts"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
     
    </div>
    )
   )
}


