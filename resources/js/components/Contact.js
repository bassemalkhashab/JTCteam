import Cookies from 'js-cookie';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from "./Footer";



function Contact() {

  const urlParams = new URLSearchParams(window.location.search);
  const [list, setList]= useState(urlParams.get('list')== 'true'?JSON.parse(Cookies.get('list')):null);
  const [category, setCategory] = useState(urlParams.get('category'))
  const [service, setService] = useState(urlParams.get('service'))
  const [scrollList, setScrollList]=useState(false);
  const [fname, setFname]=useState('');
  const [lname, setLname]=useState('');
  const [email, setEmail]=useState('');
  const [phone, setPhone]=useState('');
  const [address1, setAddress1]=useState('');
  const [address2, setAddress2]=useState('');
  const [postalCode, setPostalCode]=useState('');
  const [unit, setUnit]=useState('');
  const [serviceData, setServiceData] = useState([]);

  function submitRequest(){
    let data = {
      category:category,
      service:service,
      list:list,
      fname:fname,
      lname:lname,
      email:email,
      phone:phone,
      address1:address1,
      address2:address2,
      postalCode:postalCode,
      unit:unit
    }
    // console.log(data)

    fetch("/contact", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(data)
    }).then(res => {
      res.json();
    }).then(data=>{console.log(data)})
    .catch(err => console.error(err));
  }

  useEffect(()=>{
    fetch(`/service/details?category=commercial&service=service`)
        .then(res=>res.json())
        .then(data=>{
          setServiceData(data);
          // console.log(data);
        })
      
  },[]);

  return (
    <>
    <div className="background">

    <div id="contact-layout" className='container d-flex justify-content-evenly align-items-center'>
      <div className="h5 shadow-sm p-3 mb-5 bg-body rounded"><h5 id="contact-details" className='border border-dark p-3 m-0'>  You can fill out the form so we can reach you out as soon as possible or Contact us on: <br /><br /> <i className="fa-solid fa-phone"></i> <a href="tel:+1 226 884 4911">+1 226 884 4911</a> <br /><br /><i className="fa-solid fa-envelope"></i> <a href="mailto:info@jtcteam.ca" className="mb-0">info@jtcteam.ca</a> </h5></div>
      {/* <h4 id="contact-details">Contact us on <a href="tel:+1 226 884 4911">+1 226 884 4911</a> or fill out the form so we can reach you out as soon as possible</h4> */}
          <form id="form" onSubmit={(e)=>{e.preventDefault(); submitRequest();}}>
          <div id="form-scroll" className={scrollList?'scroll':''}>
        <div id='contact-form'>

            <div className='form a'>
              <input type="text" name="fname" autoComplete="off" value={fname} onChange={e=>setFname(e.target.value)} required />
              <label htmlFor="fname" className="label-name">
                <span className="content-name">First Name</span>
              </label>
            </div>

            <div className='form b'>
              <input type="text" name="lname" autoComplete="off" value={lname} onChange={e=>setLname(e.target.value)}  required />
              <label htmlFor="lname" className="label-name">
                <span className="content-name">Last Name</span>
              </label>
            </div>
            
            <div className='form c'>
              <input type="text" name="email" autoComplete="off" value={email} onChange={e=>setEmail(e.target.value)}  required />
              <label htmlFor="email" className="label-name">
                <span className="content-name">Email</span>
              </label>
            </div>
            
            <div className='form d'>
              <input type="text" name="tel" autoComplete="off" value={phone} onChange={e=>setPhone(e.target.value)}  required />
              <label htmlFor="tel" className="label-name">
                <span className="content-name">Phone Number (In Canada)</span>
              </label>
            </div>
            
            <div className='form e'>
              <input type="text" name="address-level1" autoComplete="off" value={address1} onChange={e=>setAddress1(e.target.value)}  required />
              <label htmlFor="address-level1" className="label-name">
                <span className="content-name">Address 1</span>
              </label>
            </div>
            
            <div className='form f'>
              <input type="text" name="address-level2" autoComplete="off" value={address2} onChange={e=>setAddress2(e.target.value)}  required />
              <label htmlFor="address-level2" className="label-name">
                <span className="content-name">Address 2</span>
              </label>
            </div>
            
            <div className='form g'>
              <input type="text" name="postal-code" autoComplete="off" value={postalCode} onChange={e=>setPostalCode(e.target.value)}  required />
              <label htmlFor="postal-code" className="label-name">
                <span className="content-name">Zipcode</span>
              </label>
            </div>
            
            <div className='form h'>
              <input type="text" name="unit-number" autoComplete="off" value={unit} onChange={e=>setUnit(e.target.value)}  required />
              <label htmlFor="unit-number" className="label-name">
                <span className="content-name">Unit Number</span>
              </label>
            </div>
            
            <div className='form i'>
              <select name="category" id="select-category" onChange={(e)=>setCategory(e.target.value)} defaultValue={category}>
                <option value="none" > Category</option>
                <option value="residential" >Residential</option>
                <option value="commercial" >Commercial</option>
                <option value="clothes" >Clothes</option>
              </select>
            </div>
            {category!='clothes'?
            <div className='form k'>
              <select name="service" id="select-service" onChange={(e)=>setService(e.target.value)} defaultValue={service}>
                <option value="none" > Service</option>
                
                { 

                  serviceData
                  .filter(service=>service.category == category)
                  .map((value, index)=>(
                    <option value={value.header} key={index}>{value.header}</option>
                  ))
                    
                }
              </select></div>
            :""}
            <div className="form j">
              {category == 'clothes'?<button className='btn btn-primary' onClick={(e)=>{e.preventDefault();setScrollList(true)}} >Next</button>:<button type="submit" className='btn btn-primary'>Submit your request</button>}
            </div>
        </div>
        <div className='p-5 d-flex flex-column align-items-center justify-content-between' id="service-list">

          <ul className="list-group w-100" id='form2'>
            {list&&
              list.map((value, index)=>(
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {value.cloth}
                  <span className="badge bg-primary rounded-pill">{value.amount}</span>
                </li>

              ))
            }
          </ul>
          <div className='w-100' id="form-control-btns">
            <button className='btn btn-secondary w-100 mt-2' onClick={(e)=>{e.preventDefault();setScrollList(false)}} >Back</button>
            <button onClick={()=>{setScrollList(false); }} type="submit" className='btn btn-primary w-100 mt-2'>Submit your request</button>
          </div>
        </div>
          </div>
          </form>
      </div>
    <Footer/>
    </div>
    </>
  )
}

export default Contact