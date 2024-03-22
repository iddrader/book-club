import { FunctionComponent } from "react";
import './registerModal.scss';
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setRegisterModalShowing } from "../../store/action-creators/config";


const RegisterModal: FunctionComponent = () => {
    const dispatch = useAppDispatch();


    return (
        <>
            <div className="modal-bg" onClick={() => dispatch(setRegisterModalShowing())}></div>
            <div className="register-modal">
                <h2>Sign up</h2>
                <form action="">
                    <label htmlFor="email">
                        Email
                        <input type="email" name="password" id="password"/>
                    </label>
                    <label htmlFor="password">
                        Password
                        <input type="password" name="password" id="password" />
                    </label>
                    <label htmlFor="password2">
                        Confirm password
                        <input type="password" name="password2" id="password2" />
                    </label>
                    <button type="submit" className="signup-btn">Join BookClub!</button>
                </form>
            </div>
        </>
    );
}
 
export default RegisterModal;