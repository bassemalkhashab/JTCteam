import React from 'react';
import Footer from "./Footer";

function Contact() {
  return (
    <>
    <div id="contact-layout" className='container d-flex justify-content-evenly align-items-center'>
      <h4 className='' id="contact-details">Contact us on <a href="tel:+1 226 884 4911">+1 226 884 4911</a> or fill out the form so we can reach you out as soon as possible</h4>
      <form id='contact-form'>
        <div className='form a'>
          <input type="text" name="fname" autoComplete="off" required />
          <label htmlFor="fname" className="label-name">
            <span className="content-name">First Name</span>
          </label>
        </div>

        <div className='form b'>
          <input type="text" name="lname" autoComplete="off" required />
          <label htmlFor="lname" className="label-name">
            <span className="content-name">Last Name</span>
          </label>
        </div>
        
        <div className='form c'>
          <input type="text" name="email" autoComplete="off" required />
          <label htmlFor="email" className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>
        
        <div className='form d'>
          <input type="text" name="tel" autoComplete="off" required />
          <label htmlFor="tel" className="label-name">
            <span className="content-name">Phone Number (In Canada)</span>
          </label>
        </div>
        
        <div className='form e'>
          <input type="text" name="address-level1" autoComplete="off" required />
          <label htmlFor="address-level1" className="label-name">
            <span className="content-name">Address 1</span>
          </label>
        </div>
        
        <div className='form f'>
          <input type="text" name="address-level2" autoComplete="off" required />
          <label htmlFor="address-level2" className="label-name">
            <span className="content-name">Address 2</span>
          </label>
        </div>
        
        <div className='form g'>
          <input type="text" name="postal-code" autoComplete="off" required />
          <label htmlFor="postal-code" className="label-name">
            <span className="content-name">Zipcode</span>
          </label>
        </div>
        
        <div className='form h'>
          <input type="text" name="unit-number" autoComplete="off" required />
          <label htmlFor="unit-number" className="label-name">
            <span className="content-name">Unit Number</span>
          </label>
        </div>
        
        <div className='form i'>
          <select name="service" id="select-service">
            <option value="none" defaultValue>Service</option>
            <option value="Residential" >Residential</option>
            <option value="Commercial" >Commercial</option>
            <option value="Clothes" >Clothes</option>
          </select>
        </div>
        <div className="form j">
          <button type="submit" className='btn btn-primary'>Submit your request</button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contact