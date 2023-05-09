import { Link } from 'react-router-dom';
import logo from '../../utils/images/icon.jpg';

const SignInInfo = () => {
    return (
        <article className="home-content">
            <img src={logo}/>
            <h1><span><big>Welcome Back</big></span></h1>

            <p>
                To keep connected with us please login with your personal info to Re-Define Me
            </p>
            <div className="home-buttons">
                <Link to="Calories" className="calories-btn">Sign In</Link>
            </div>
        </article>
    )
}

export default SignInInfo;