import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ServiceSideNav({serviceData, service, category, isPending }) {

    const [closed, setClosed] = useState(true);
    const [accorDiv, setAccorDiv] = useState(`accordion-collapse collapse`);
    const [accorBtn, setAccorBtn] = useState(`accordion-button collapsed`);



    useEffect(()=>{

    },[])

    if (window.innerWidth > 1000){
    return (serviceData&&(
            <div id="side-nav">

                <button id='side-nav-up' onClick={()=>document.querySelector('#side-nav-ul').scrollTop -=100}><i className="fa-solid fa-sort-up"></i></button>
                <ul id="side-nav-ul" className='side-nav-ul'>
                {
                    serviceData.map((Service, index)=>{
                    return (<li className={index == service-1?'active':""} key={index}><Link to={`/service?category=${category}&service=${index+1}`}> {Service.header}</Link></li>)
                    })
                }
                
                </ul>
                <button id='side-nav-down' onClick={()=>document.querySelector('#side-nav-ul').scrollTop +=100}><i className="fa-solid fa-sort-down"></i></button>
                </div>
            )||(!isPending&&<h3 id='nothing'>Nothing to show</h3>))
    }
    else{
        return (serviceData&&(

            <div id="accordionExample">
                <button onClick={()=>setClosed(!closed)} className={closed?"":"show"}>{serviceData[service-1].header} <i className="fa-solid fa-chevron-down"></i></button>
                <ul id="collapseOne" className='side-nav-ul'>
                {
                    serviceData.map((Service, index)=>{
                    return (<li className={index == service-1?'active':""} key={index}><Link onClick={()=>setClosed(!closed)} to={`/service?category=${category}&service=${index+1}`}> {Service.header}</Link></li>)
                    })
                }
                
                </ul>
            </div>
            )||(!isPending&&<h3 id='nothing'>Nothing to show</h3>)
        )
    }
}

export default ServiceSideNav