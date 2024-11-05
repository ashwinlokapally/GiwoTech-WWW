import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-main'>
        <h1 className='contact-heading'>Contact Us</h1>
        <br></br>
        <p>Reach out to our team for support, We'd be more than
        happy to answer your questions!</p>
        <br></br>
        <div className='contact'>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.431055685534!2d-71.04104992463738!3d42.31200397119735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37afe5ca20589%3A0x882bd63cf20dd1c4!2sVenture%20Development%20Center!5e0!3m2!1sen!2sus!4v1730751918159!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='contact-form'>
                <form>
                    <label></label>
                    <input type='text' name='name' placeholder='Name' required/>
                    <label></label>
                    <input type='tel' name='phone' placeholder='Phone Number' required/>
                    <label></label>
                    <input type='email' name='email' placeholder='Email' required/>
                    <label></label>
                    <input type='text' name='subject' placeholder='Subject'/>
                    <label></label>
                    <textarea name='message'rows='4' placeholder='Message' required></textarea>
                    <button type='submit' className='btn'>Send Message</button>
                </form>
            </div>
        </div>
        

    </div>
    
  )
}

export default Contact