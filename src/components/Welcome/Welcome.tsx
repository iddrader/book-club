import { FunctionComponent } from "react";
import WelcomeImage from '../../img/pexels-alina-vilchenko-2099266.jpg'
import './welcome.scss'
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setLoginModalShowing, setRegisterModalShowing } from "../../store/action-creators/config";
import { RootState } from "../../store";
import RegisterModal from "../RegisterPage/RegisterPage";
import LoginModal from "../LoginPage/LoginPage";
import { Link } from "react-router-dom";
 
const Welcome: FunctionComponent= () => {
    const config = useSelector((state: RootState) => state.config);
    const dispatch = useAppDispatch();

    const handleSignupClick = () => {
        dispatch(setRegisterModalShowing())
    }

    const handleSigninClick = () => {
        dispatch(setLoginModalShowing())
    }

    return (
        <div className="welcome-wrap">
            <div className="welcome">
                <div className="title">
                     <p>Online library of books you want to remember</p>
                    <img src={WelcomeImage} className="welcome-image"/>
                </div>
                <div className="description">
                    <p>
                        Add your favorite books to your list, rate them, describe what you like about them.
                        Didn't like a book? You can still add it to the list and tell your future selt why you considered it to be bad.
                    </p>
                    <div className="welcome-buttons">
                        <Link to={'register'} className="signup-btn">Sign up</Link>
                        <Link to={'login'} className="signin-btn">Sign in</Link>
                    </div>
                </div>
            </div>
            
            { config.registerModalShowing && 
                <RegisterModal />
            }
            { config.loginModalShowing && 
                <LoginModal />
            }
        </div>
    );
}
 
export default Welcome;