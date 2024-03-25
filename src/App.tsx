import { FunctionComponent, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.scss'
import { BrowserRouter, Routes, Route, redirect, useNavigate, Navigate} from "react-router-dom";
import { supabase } from "./api/index.ts";
import { useAppDispatch, useAppSelector } from "./components/hooks/useAppDispatch.ts";
import { setIsAuth } from "./store/action-creators/config.ts";
import Welcome from "./components/Welcome/Welcome.tsx";
import LoginPage from "./components/LoginPage/LoginPage.tsx";
import Search from "./components/Search/Search.tsx";
import RegisterPage from "./components/RegisterPage/RegisterPage.tsx";


const App: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const config = useAppSelector(state => state.config)

  const getUserStatus = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if(user)
      dispatch(setIsAuth(true))
  }

  const notAuthLoader = () => {
    if(config.isAuth) return redirect('/search')
    return null;
  }

  useEffect(() => {
    getUserStatus();
  }, [])
  
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route 
              path="/" 
              element={!config.isAuth ? <Welcome /> : <Navigate replace to={"/search"} />} 
          />
          <Route 
              path="login" 
              element={!config.isAuth ? <LoginPage /> : <Navigate replace to={"/search"} />} 
          /> 
          <Route 
              path="register" 
              element={!config.isAuth ? <RegisterPage /> : <Navigate replace to={"/search"} />}  
          />
          <Route 
              path="search" 
              element={config.isAuth ? <Search /> : <Navigate replace to={"/"}/>} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;