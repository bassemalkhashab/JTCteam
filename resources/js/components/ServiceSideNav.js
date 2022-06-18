import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ServiceSideNav({serviceData, service, category, isPending }) {

    const [closed, setClosed] = useState(true);
    const [accorDiv, setAccorDiv] = useState(`accordion-collapse collapse`);
    const [accorBtn, setAccorBtn] = useState(`accordion-button collapsed`);

    function toggleAccordion(){
        
    }

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

            

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className={accorBtn}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Services
                    </button>
                    </h2>
                    <div id="collapseOne" className={accorDiv} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul className='side-nav-ul'>
                            {
                            serviceData.map((Service, index)=>{
                            return (<li className={index == service-1?'active':""} key={index}><Link onClick={toggleAccordion} to={`/service?category=${category}&service=${index+1}`} value={index}>{Service.header} </Link></li>)
                            })
                            }
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            )
        )
    }
}

export default ServiceSideNav