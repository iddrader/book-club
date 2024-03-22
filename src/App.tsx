import { FunctionComponent, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.scss'
import RecentBooks from "./components/RecentBooks/RecentBooks";
import Search from "./components/Search/Search";
import Welcome from "./components/Welcome/Welcome";


const App: FunctionComponent = () => {
  const [searchActive, setSearchActive] = useState(false)
  const [isAuth, setIsAuth] = useState(false);
  
  return (
    <div>
      <NavBar />
      { isAuth ?
          <div className="content">
            {searchActive ? 
              <>
                <div className="cancelBtn" onClick={() => setSearchActive(false)}>Cancel</div>
                <Search />
              </>
              : 
              <>
                <div className="addBookBtn" onClick={() => {setSearchActive(true)}}>Add new book</div>
                <RecentBooks />
              </>
            }
          </div>
        : <Welcome />
      }
    </div>
  );
}
 
export default App;