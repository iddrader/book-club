import { FormEvent, FunctionComponent } from "react";
import './registerPage.scss';
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setRegisterModalShowing } from "../../store/action-creators/config";
import { Link } from "react-router-dom";


const RegisterModal: FunctionComponent = () => {
    const dispatch = useAppDispatch();


    const handleRegisterSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setRegisterModalShowing());
    }

    return (
        <>
            <div className="register-page">
                <form action="" onSubmit={handleRegisterSubmit}>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                    <input type="password" name="password2" id="password2" placeholder="Confirm password"/>
                    <button type="submit" className="signup-btn">Join BookClub!</button>
                    <Link to={"/"} className="back-btn">Back to main</Link>
                </form>

            </div>
        </>
    );
}
 
export default RegisterModal;