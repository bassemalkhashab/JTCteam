import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react'

function ServiceDisplay({setServiceData, setTotalPages,category, service, setIsPending}) {

    const [serviceHeader, setServiceHeader]=useState("");
    const [serviceDescription, setServiceDescription]=useState("");
    const [image, setImage]=useState("");
    const [price, setPrice] = useState(null);
    const [amount, setAmount] =useState(0);
    
    useEffect(()=>{
        fetch(`/service/details?category=${category}&servive=${service}`)
        .then(res=>res.json())
        .then(data=>{
            setTotalPages(data.length);
            setIsPending(false);
            if (data.length >0){
            setServiceHeader(data[service-1].header);
            setServiceDescription(data[service-1].description);
            setImage(data[service-1].image);
            setPrice(data[service-1].price)
            setServiceData(data);
        }
            else{
            setServiceHeader("");
            setServiceDescription("");
            setImage("");
            setPrice(null);
            setServiceData(null);
            }
        })
        .catch((err) => {
            setIsPending(false);
            console.error(err)
        });
        
    },[category,service]);

  return (
    <>
        {image&&<img id='service-img' src={`/storage/${image}`} alt="" />}
        {serviceHeader&&<button id='service-btn'>Quotation</button>}
        {serviceHeader&&<div id='service-title' className='d-flex flex-column justify-content-between'><h3>{serviceHeader}</h3>{price&&<p id="cost" className='m-0'>Cost: ${price}</p>}</div>}
        {serviceDescription&&<p id='service-description'>{serviceDescription}</p>}
        {category == "clothes"? price&&(<><button className='btn btn-success' id="add-to-list">Add to list</button> <div id="amount" className='d-flex'><button onClick={()=>{parseInt(amount)>0?setAmount(amount-1):setAmount(0)}} className="btn btn-light">-</button> <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} /> <button className="btn btn-light"  onClick={()=>{parseInt(amount)>=0?setAmount(amount+1):setAmount(0)}} >+</button></div> </>) : null}
    </>
  )
}

export default ServiceDisplay