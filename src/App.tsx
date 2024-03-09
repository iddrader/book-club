import { FunctionComponent } from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.scss'
import RecentBooks from "./components/RecentBooks/RecentBooks";

interface AppProps {
  
}
 
const App: FunctionComponent<AppProps> = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <div className="addBookBtn">Add new book</div>
        <RecentBooks />
      </div>
    </div>
  );
}
 
export default App;