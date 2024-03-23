import { FunctionComponent } from 'react';
import './loginPage.scss'
import { Link } from "react-router-dom";

const LoginModal: FunctionComponent = () => {

    return (
        <>
            <div className="login-modal">
                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                    <button type="submit" className="signin-btn">Login</button>
                    <Link to={"/"} className="back-btn">Back to main</Link>
                </form>
            </div>
        </>
    );
}
 
export default LoginModal;