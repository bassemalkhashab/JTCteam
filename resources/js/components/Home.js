import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
  return (
      <div className="container">
            <h1 className='mt-5 fw-bolder'>We customize cleaning for you</h1>
            <p className='mt-2'>Professional and experienced cleaning service that delivers the results you expect. We pride ourselves on providing reliable, fast and detailed results.</p>
            <div className="d-flex justify-content-between mt-5" id='options'>
                <Link to='/service/residential' className="option">
                    <img src="storage/sofa.png" alt="Sofa" height={300} />
                    <h5>Residential</h5>
                </Link>
                <Link to='/service/commercial' className="option">
                    <img src="storage/plate.png" alt="Sofa" height={300} />
                    <h5>Commercial</h5>
                </Link>
                <Link to='/service/clothes' className="option">
                    <img src="storage/clothes.png" alt="Sofa" height={300} />
                    <h5>Clothes</h5>
                </Link>
            </div>
      </div>
  )
}

export default Home