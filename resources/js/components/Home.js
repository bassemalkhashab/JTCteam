import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import Footer from "../components/Footer";

function Home() {
    const [loaded1, setLoaded1]=useState(false);
    const [loaded2, setLoaded2]=useState(false);
    const [loaded3, setLoaded3]=useState(false);

    useEffect(()=>{
        const image1 = new Image();
        image1.src='/storage/sofa.png';
        image1.onload = () => {
            setLoaded1(true);
        };
        const image2 = new Image();
        image2.src='/storage/plate.png';
        image2.onload = () => {
            setLoaded2(true);
        };
        const image3 = new Image();
        image3.src='/storage/clothes.png';
        image3.onload = () => {
            setLoaded3(true);
          };
    },[]);

  return loaded1&&loaded2&&loaded3&&(
      <>
      <div className="container pt-5">
            <h1 className='mt-5 fw-bolder'>We customize cleaning for you</h1>
            <h5 className='mt-3'>Professional and experienced cleaning service that delivers the results you expect. We pride ourselves on providing reliable, fast and detailed results.</h5>
            <div className="d-flex justify-content-between mt-5" id='options'>
                <Link to='/service/residential' className="option">
                    <img src="/storage/sofa.png" alt="Sofa" height={300} />
                    <h5>Residential</h5>
                </Link>
                <Link to='/service/commercial' className="option">
                    <img src="/storage/plate.png" alt="Sofa" height={300}/>
                    <h5>Commercial</h5>
                </Link>
                <Link to='/service/clothes' className="option">
                    <img src="/storage/clothes.png" alt="Sofa" height={300} />
                    <h5>Clothes</h5>
                </Link>
            </div>
      </div>
      <Footer/>
      </>
  )||(<div id='loading-container'>
      <section><span className='loader-38'></span></section>
      </div>)
}

export default Home