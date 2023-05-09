import { Button, TextField } from "@mui/material";
import { maxWidth } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import Input from './nested-components/Input';
import Loader from './nested-components/Loader';
 
const Login = () => {
 const navigate = useNavigate();
 const location = useLocation();

 const [email, setEmail] = useState('');
 const [subject, setPassword] = useState('');
 
 // We are consuming our user-management context to
 // get & set the user details here
 const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);
 
 // We are using React's "useState" hook to keep track
 //  of the form values.
 const [form, setForm] = useState({
   email: "",
   password: ""
 });
 
 // This function will be called whenever the user edits the form.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 // This function will redirect the user to the
 // appropriate page once the authentication is done.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/");
 }
 
 // Once a user logs in to our app, we don’t want to ask them for their
 // credentials again every time the user refreshes or revisits our app, 
 // so we are checking if the user is already logged in and
 // if so we are redirecting the user to the home page.
 // Otherwise we will do nothing and let the user to login.
 const loadUser = async () => {
   if (!user) {
     const fetchedUser = await fetchUser();
     if (fetchedUser) {
       // Redirecting them once fetched.
       redirectNow();
     }
   }
 }
 
 // This useEffect will run only once when the component is mounted.
 // Hence this is helping us in verifying whether the user is already logged in
 // or not.
 useEffect(() => {
   loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 
 // This function gets fired when the user clicks on the "Login" button.
 const onSubmit = async (event) => {
   try {
     // Here we are passing user details to our emailPasswordLogin
     // function that we imported from our realm/authentication.js
     // to validate the user credentials and log in the user into our App.
     const user = await emailPasswordLogin(form.email, form.password);
     if (user) {
       redirectNow();
     }
   } catch (error) {
       if (error.statusCode === 401) {
          alert("Invalid username/password. Try again!");
      } else {
          alert(error);
      }
 
   }
 };
 
 return <form className="contact-form-container" style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
   <h2><span>Welcome Back</span></h2>
    <h2>Sign In</h2>
    <div style={{maxWidth: "400px", margin: "auto"}} className="input-field">
    <label htmlFor='email'>Email</label>
    <input
     type="email"
     name="email"
     value={form.email}
     onChange={onFormInputChange}
     style={{ marginBottom: "1rem" }}
     required={true}
   />
    <br/>
    </div>
    <div style={{maxWidth: "400px", margin: "auto"}} className="input-field">
    <label htmlFor='password'>Password</label>
    <input
     type="password"
     name="password"
     value={form.password}
     onChange={onFormInputChange}
     style={{ marginBottom: "1rem" }}
     required={true}
   />
   <br/>
    </div>
   <Button style={{maxWidth: "400px", margin: "auto"}} variant="contained" color="primary" onClick={onSubmit}>
     Login
   </Button>
   <br/>
   <p style={{color:'white'}}>Don't have an account? <Link to="/signup">Signup</Link></p>
   <br/>
 </form>
}
 
export default Login;