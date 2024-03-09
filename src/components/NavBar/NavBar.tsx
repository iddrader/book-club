import { FunctionComponent, useState } from "react";
import './navBar.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


interface NavBarProps {
    
}
 
const NavBar: FunctionComponent<NavBarProps> = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {menuOpen ? 
                <ul className="menu">
                    <li><PersonOutlineIcon /></li>
                    <li><LogoutOutlinedIcon /></li>
                    <li><DarkModeOutlinedIcon /></li>
                    <li><InfoOutlinedIcon /></li>
                </ul>
                : 
                <div className="title">BookClub</div>
            }
            <div className="menuButton" onClick={() => setMenuOpen(prev => !prev)}>
                <MenuOutlinedIcon />
            </div>
        </nav>
    );
}
 
export default NavBar;