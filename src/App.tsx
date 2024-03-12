import { FunctionComponent, useEffect, useState } from "react";
import { fetchBooks } from "./store/action-creators/booksFetched";
import NavBar from "./components/NavBar/NavBar";
import './App.scss'
import RecentBooks from "./components/RecentBooks/RecentBooks";
import AddBookModal from "./components/AddBookModal/AddBookModal";
import Search from "./components/Search/Search";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./components/hooks/useAppDispatch";


const App: FunctionComponent = () => {
  const [modalActive, setModalActive] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  
  return (
    <div>
      <NavBar />
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
        { modalActive && <AddBookModal />}
      </div>
    </div>
  );
}
 
export default App;