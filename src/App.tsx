import { FunctionComponent, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.scss'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { supabase } from "./api/index.ts";
import { useAppDispatch } from "./components/hooks/useAppDispatch.ts";
import { setIsAuth } from "./store/action-creators/config.ts";


const App: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const getUserStatus = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if(user)
      dispatch(setIsAuth(true))
    console.log(user)
  }

  useEffect(() => {
    getUserStatus();
  }, [])
  
  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}
 
export default App;