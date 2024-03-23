import { FormEvent, FunctionComponent } from "react";
import './registerPage.scss';
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../api";


const RegisterPage: FunctionComponent = () => {
    const navigate = useNavigate();

    const handleRegisterSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement)
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const password2 = formData.get("password2") as string;

        if(password !== password2)
            return;
    
        let { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })

        error
        ? console.log(error)
        : alert("Email has been send to your email address. Please confirm your email by following the link.")
        
        navigate('/')
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
 
export default RegisterPage;