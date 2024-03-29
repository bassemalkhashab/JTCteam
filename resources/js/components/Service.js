import React, {useState, useEffect} from 'react'
import { Link, useHistory  } from 'react-router-dom';
import ServiceDisplay from './ServiceDisplay';
import Footer from "./Footer";
import ServiceSideNav from './ServiceSideNav';
import MyLoader from './MyLoader';

function Service() {
  let urlParams = new URLSearchParams(window.location.search);

  const history = useHistory() 
  const [category ,setCategory]= useState(urlParams.get('category')||'clothes');
  const [service ,setService]= useState(urlParams.get('service')||"1");
  const [cloth ,setCloth]= useState(urlParams.get('service')||'1');
  const [totalPages, setTotalPages]=useState("1");
  const [serviceData, setServiceData]= useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(()=>{
    history.push({
      pathname:'/service', 
      search:`?category=${category}&service=${service}`
    })
    return history.listen((location) => { 
      const urlParams = new URLSearchParams(window.location.search);
       setCategory(urlParams.get('category'));
       setService(urlParams.get('service'));
   })  
    },[history, service, serviceData]);
       
  return (
    <>
    <div className="container shadow mb-5 overflow-hidden bg-body" id='service-container'>
        <ul id="category-navbar">
            <li className={category == 'clothes'?'active':""}><Link to={"/service?category=clothes&service="+cloth}>Clothes</Link></li>
            <li className={category == 'commercial'?'active':""}><Link to="/service?category=commercial&service=1">Commercial</Link></li>
            <li className={category == 'residential'?'active':""}><Link to="/service?category=residential&service=1">Residential</Link></li>
            <div className={`highlight ${category}`}></div>
        </ul>

       
        {serviceData&&<div className="pagination">
            <button className='pagination-btn ' id="prev" onClick={()=>{
              if(service > 1){
                   setService(parseInt(service)-1)

              }
            }}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            
            <p className='mx-5'>{service}</p>
            <button className='pagination-btn' id="next" onClick={()=>{
              if (service < parseInt(totalPages)){
                
                setService(parseInt(service) + 1)
              }
            }}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>}

        <ServiceSideNav isPending={isPending} serviceData={serviceData} service={service} category={category} />
        {isPending&&<MyLoader/>}
        <ServiceDisplay urlParams={urlParams} setIsPending={setIsPending} setServiceData={setServiceData} setTotalPages={setTotalPages} category={category} service={service} />
        
        
    </div>
    <Footer/>
    </>
  )
}

export default Service