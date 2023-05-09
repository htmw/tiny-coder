import {useState} from 'react';
import Input from './Input';
import Loader from './Loader';

const FORM_SUBMIT_REQUEST_URL = `https://formsubmit.co/ajax/${process.env.REACT_APP_FORM_SUBMIT_EMAIL_MASK_DEV}`;

const ContactForm = ({ contactFormRef }) => {
    const [showLoader, setShowLoader] = useState(false);

    // variables used to handle form input by user
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setPassword] = useState('');

    // called when user submits form
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        // Checking if required fields are filled
        if (email === '' || name === '' || message === ''){
            alert('Please fill in the required fields');
            return;
        }
        
        sendEmail({ email, name, subject, message });
    }


    const sendEmail = async (emailData) => {
        setShowLoader(true)
        
        const response = await fetch(FORM_SUBMIT_REQUEST_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(emailData)
        })

        const data = await response.json();

        if (data.success === 'true') {
            alert('Thank you for your feedback!')
        } else {
            alert(data.message)
        }

        resetContactForm();
        setShowLoader(false)
    }

    const resetContactForm = () => {
        setEmail('')
        setName('')
        setPassword('')
    }

    return(
        <form className="contact-form-container" onSubmit={handleFormSubmit}>
            <div ref={contactFormRef} className="contact-ref"></div> {/* used to scroll to contact form when "Contact" is clicked in navigation menu */}
            <h2><span> Login to Re-Define Me</span></h2>

            <Input name="email" type="email" placeholder="your email" value={email} handleChange={setEmail} required={true}  />
            <br/>
            <Input name="name" placeholder="your name" value={name} handleChange={setName} required={true}  />
            <br/>
            <Input name="password" type="password" placeholder="your password" value={password} handleChange={setPassword} />
            <br/>
            <Button />

            {showLoader ? <Loader /> : null}
        </form>
    )
}

const Button = () => {
    return(
        <button>
            <span>Login</span>
            <svg className="fa-solid fa-sign-in"></svg>
        </button>
    )
}

export default ContactForm;