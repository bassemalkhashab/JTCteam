import React, {useState, useEffect} from 'react'

function ServiceDisplay({setServiceData, setTotalPages,category, service, setIsPending}) {

    const [serviceHeader, setServiceHeader]=useState("");
    const [serviceDescription, setServiceDescription]=useState("");
    const [image, setImage]=useState("");
    
    
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
            setServiceData(data);
        }
            else{
            setServiceHeader("")
            setServiceDescription("")
            setImage("")
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
        {serviceHeader&&<button id='service-btn'>Quotation</button> }
        {serviceHeader&&<h3 id='service-title'>{serviceHeader}</h3>}
        {serviceDescription&&<p id='service-description'>{serviceDescription}</p>}
    </>
  )
}

export default ServiceDisplay