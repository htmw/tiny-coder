import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";


const Signup = () => {
 const navigate = useNavigate();
 const location = useLocation();
 
 // As explained in the Login page.
 const { emailPasswordSignup } = useContext(UserContext);
 const [form, setForm] = useState({
   email: "",
   password: ""
 });
 
 // As explained in the Login page.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 
 // As explained in the Login page.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/");
 }
 
 // As explained in the Login page.
 const onSubmit = async () => {
    alert(form.email + form.password)
   try {
     const user = await emailPasswordSignup(form.email, form.password);
     if (user) {
       redirectNow();
     }
   } catch (error) {
     alert(error);
   }
 };
 
 return <form className="contact-form-container footer" style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
   <h2><span>Get Started</span></h2>
    <h2>Sign Up</h2>
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
    </div>
   <Button style={{maxWidth: "400px", color:'white', margin: "auto"}} variant="contained" color="primary" onClick={onSubmit}>
     Signup
   </Button>
   <br/>
   <p style={{color:'white'}}>Have an account already? <Link to="/login">Login</Link></p>
   <br/>
 </form>
}
 
export default Signup;