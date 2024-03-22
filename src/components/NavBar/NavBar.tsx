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
import { setMenuShowing } from "../../store/action-creators/config";


interface NavBarProps {
    
}
 
const NavBar: FunctionComponent<NavBarProps> = () => {
    const config = useSelector((state: RootState) => state.config)
    const dispatch = useAppDispatch();

    const handleMenuClick = () => {
        dispatch(setMenuShowing())
    }

    return (
        <nav className="navbar">
            {config.menuShowing ? 
                <ul className="menu">
                    <li><PersonOutlineIcon /></li>
                    <li><LogoutOutlinedIcon /></li>
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