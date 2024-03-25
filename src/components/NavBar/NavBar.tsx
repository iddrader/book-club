import { FunctionComponent } from "react";
import './navBar.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setIsAuth, setMenuShowing } from "../../store/action-creators/config";
import { supabase } from "../../api";
import { useNavigate } from "react-router-dom";


interface NavBarProps {
    
}
 
const NavBar: FunctionComponent<NavBarProps> = () => {
    const config = useSelector((state: RootState) => state.config)
    const dispatch = useAppDispatch();

    const handleMenuClick = () => {
        dispatch(setMenuShowing());
    }

    const handleLogoutClick = async () => {
        let { error } = await supabase.auth.signOut();
        if (error) 
            return error
        
        dispatch(setIsAuth(false));
        dispatch(setMenuShowing())
    }

    return (
        <nav className="navbar">
            {config.menuShowing ? 
                <ul className="menu">
                    <li><PersonOutlineIcon /></li>
                    <li onClick={handleLogoutClick}><LogoutOutlinedIcon /></li>
                    <li><DarkModeOutlinedIcon /></li>
                    <li><InfoOutlinedIcon /></li>
                </ul>
                : 
                <div className="title">BookClub</div>
            }
            { config.isAuth &&
            <div className="menuButton" onClick={handleMenuClick}>
                <MenuOutlinedIcon />
            </div>}
        </nav>
    );
}
 
export default NavBar;