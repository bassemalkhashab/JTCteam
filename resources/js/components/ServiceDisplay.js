import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'

function ServiceDisplay({urlParams ,setServiceData, setTotalPages,category, service, setIsPending}) {
    
    const [serviceHeader, setServiceHeader]=useState("");
    const [serviceDescription, setServiceDescription]=useState("");
    const [image, setImage]=useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] =useState(0);
    const [list, setList] = useState(category == 'clothes'?[{service:parseInt(service), amount:parseInt(amount), cloth:serviceHeader, price:parseInt(price)}]:[]);
    const [total, setTotal] = useState(0);
    const [fetchingData, setFetchingData] = useState(false);
    
    function calculateTotal(){

        let sum = 0; 
        list.length?list.forEach((value)=>{sum+=(parseInt(value.amount)*parseInt(value.price))}):sum=0;
        setTotal(sum);
        // console.log(list)
    }

    useEffect(()=>{


        // console.log(list);
        setFetchingData(true);
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
            setPrice(0);
            setServiceData(null);
            }
        })
        .then(()=>{
          
                // remember the amount of clothes by fetching it from the array                    
                        if (category == 'clothes'){
                        let modified =false;
                        list.map((value, index)=>{
                            if(parseInt(value.service) == service){
                                setAmount(parseInt(value.amount));
                                modified = true;
                            }
                        })
                        if (!modified){
                            setAmount(0);
                            // setList(list=>[...list, {service:parseInt(service), amount:amount, cloth:serviceHeader, price:parseInt(price)}])
                        }
                        // console.log(service)
                    calculateTotal();  
                    setFetchingData(false);
                    }
        })
        .catch((err) => {
            setIsPending(false);
            console.error(err)
        });

     
        
    },[category,service]);

    useEffect(()=>{

        if (category == 'clothes'){
        if (!fetchingData){
            // Modify the array of clothes list and its information
            if( parseInt(amount)>=0){
                let modified = false;
                list.map((value, index)=>{
                    if(value.service == service){
                        value.amount = parseInt(amount);
                        // value.service= parseInt(service);
                        value.price = parseInt(price);
                        value.cloth = serviceHeader;
                        modified =true;
                    }
                    
                })
                if (!modified){
                    setList(list=>[...list, {service:parseInt(service), amount:amount, cloth:serviceHeader, price:parseInt(price)}])
                }
                
            }
    
            calculateTotal();
            }
        }
    }, [amount])

    useEffect(()=>{  
        if (category == 'clothes'){
        Cookies.set("list", JSON.stringify(list))
        let data =Cookies.get("list")
        // console.log(data)
        calculateTotal();
        // console.log(JSON.parse(data))
        }
    }, [list, amount])

  return (
    <>
        {image&& <div id='service-img' className='shadow-sm p-3 mb-5 bg-body rounded'><img src={`/storage/${image}`} alt="" /></div>}
        {serviceHeader&&<Link to={`/contact?${category== 'clothes'?urlParams+'&list=true':urlParams}`} id='service-btn'>Quotation</Link>}
        {serviceHeader&&<div id='service-title' className='d-flex flex-column justify-content-between'><h3>{serviceHeader}</h3>{price&&<h5 id="cost" className='m-0'>Cost: ${price}</h5>}</div>}
        {serviceDescription&&<p id='service-description'>{serviceDescription}</p>}
        {category == "clothes"? price&&(<> <div id="amount" className='d-flex shadow p-3 mb-5 bg-body rounded-pill'><button onClick={()=>{parseInt(amount)>0?setAmount(amount-1):setAmount(0)}} className="btn btn-light">-</button> <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} /> <button className="btn btn-light"  onClick={()=>{parseInt(amount)>=0?setAmount(amount+1):setAmount(0)}} >+</button></div> <h3 id="total">Total: ${total}</h3></>) : null}
        {}
    </>
  )
}

export default ServiceDisplay