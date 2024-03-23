import { FormEvent, FunctionComponent } from 'react';
import './loginPage.scss'
import { Link, useNavigate } from "react-router-dom";
import { supabase } from '../../api';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setIsAuth } from '../../store/action-creators/config';

const LoginModal: FunctionComponent = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement)

        const email = formData.get('email');
        const password = formData.get('password');

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email as string,
            password: password as string
        })

        error
        ? console.log(error)
        : dispatch(setIsAuth(true))
        console.log(data)
        navigate('/')
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