import React, { useEffect, useRef } from 'react'
import './Contact.css'
import { FaCopy } from "react-icons/fa";
import { useSearchParams } from 'react-router-dom';
// ac7df920-d405-443e-a31d-e9d988b3a290 giwotech access_key
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d4efa107-0866-4faf-8b4f-f8c4a2363102");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    const [searchParams] = useSearchParams();
    const emailInputRef = useRef();

    useEffect(() => {
        if(searchParams.get("email")) {
            emailInputRef.current.value = searchParams.get("email");
        }
    }, []);

  return (
    <div className='contact-main'>
        <div className='contact-head'>
            <h1 className='contact-heading'>Contact Us</h1>
            <p className='contact-description'>Reach out to our team for support, We'd be more than
            happy<br></br> to answer your questions!</p>
        </div>
        
        <div className='contact'>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.431055685534!2d-71.04104992463738!3d42.31200397119735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37afe5ca20589%3A0x882bd63cf20dd1c4!2sVenture%20Development%20Center!5e0!3m2!1sen!2sus!4v1730751918159!5m2!1sen!2sus" width="550" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='map-description'>
                    <p>Venture Development Center, UMass Boston, W-3, 100 Morrissey Boulevard, Boston, MA 02125</p>
                    <button type='button' onClick={() => navigator.clipboard.writeText("Venture Development Center, UMass Boston, W-3, 100 Morrissey Boulevard, Boston, MA 02125")}><FaCopy/></button>
                </div>
            </div>

            <div className='contact-form'>
                <form onSubmit={onSubmit}>
                    <label></label>
                    <input type='text' name='name' placeholder='Name' required/>
                    <label></label>
                    <input type='tel' name='phone' placeholder='Phone Number' required/>
                    <label></label>
                    <input type='email' ref={emailInputRef} name='email' placeholder='Email' required/>
                    <label></label>
                    <input type='text' name='subject' placeholder='Subject'/>
                    <label></label>
                    <textarea name='message'rows='4' placeholder='Message' required></textarea>
                    
                    <div className='contact-email-copy'>
                    <button type='submit' className='contact-btn'>Send Message</button>
                    <div className='contact-form-submit-line'>
                      <p>info@giwotech.com</p>
                      <button type='button' onClick={() => navigator.clipboard.writeText("info@giwotech.com")}><FaCopy/></button>
                    </div>
                    
                </div>
                </form>              
                
            </div>
        </div>

    </div>
    
  )
}

export default Contact