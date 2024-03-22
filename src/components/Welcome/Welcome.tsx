import { FunctionComponent } from "react";
import WelcomeImage from '../../img/pexels-alina-vilchenko-2099266.jpg'
import './welcome.scss'
 
const Welcome: FunctionComponent= () => {
    return (
        <div className="welcome">
            <p>Online library of books you want to remember</p>
            <img src={WelcomeImage} className="welcome-image"/>
            <p>Add your favorite books to your list, rate them, describe what you liked about them.</p>
            <p>Didn't like a book? You can still add it to the list and tell your future selt why you considered it to be bad.</p>
            <div className="welcome-buttons">
                <button className="signup-btn">Sign up</button>
                <button className="signin-btn">Sign in</button>
            </div>
        </div>
    );
}
 
export default Welcome;