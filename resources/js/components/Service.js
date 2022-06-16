import React, {useState, useEffect} from 'react'
import { Link, useParams, useHistory  } from 'react-router-dom';


function Service() {
  let urlParams = new URLSearchParams(window.location.search);

  const history = useHistory() 
  const [category ,setCategory]= useState(urlParams.get('category')||'residential');
  const [service ,setService]= useState(urlParams.get('service')||"1");
  const [currentPage, setCurrentPage]=useState("1");
  const [totalPages, setTotalPages]=useState("1");
  const [serviceHeader, SetServiceHeader]=useState("Office cleaning");
  const [serviceDescription, SetServiceDescription]=useState("Office Cleaning Providing Safe, Toxin-Free Professional Office Cleaning Service.Our Aim Is To Provide The Best Office Cleaning Service And Satisfy Our Customer Through Our Service.");
  useEffect(()=>{
    return history.listen((location) => { 
      const urlParams = new URLSearchParams(window.location.search);
       setCategory(urlParams.get('category'));
       setService(urlParams.get('service'));
   })  
    },[history]);
       
  return (
    <div className="container">
        <ul id="category-navbar">
            <li className={category == 'residential'?'active':""}><Link to="/service?category=residential&service=1">Residential</Link></li>
            <li className={category == 'commercial'?'active':""}><Link to="/service?category=commercial&service=1">Commercial</Link></li>
            <li className={category == 'clothes'?'active':""}><Link to="/service?category=clothes&service=1">Clothes</Link></li>
            <div className={`highlight ${category}`}></div>
        </ul>
        <div className="pagination">
            <button className='pagination-btn' id="prev">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            {/* <input type="text" value={service} onChange={(e)=>setService(e.target.value)} /> */}
            <p className='m-5'>{service}</p>
            <button className='pagination-btn' id="next">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>

        <button>Quotation</button>
        <h3>{serviceHeader}</h3>
        <p>{serviceDescription}</p>

    </div>
  )
}

export default Service