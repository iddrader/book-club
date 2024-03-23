import { FormEvent, FunctionComponent } from "react";
import { setLoginModalShowing } from "../../store/action-creators/config";
import { useAppDispatch } from "../hooks/useAppDispatch";
import './loginPage.scss'
import { Link } from "react-router-dom";

const LoginModal: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setLoginModalShowing())
    }

    return (
        <>
            <div className="login-modal">
                <form action="" onSubmit={handleLoginSubmit}>
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