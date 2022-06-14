import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ScrollContainer from 'react-indiana-drag-scroll'
import Footer from "./Footer";
import Spinners from "./Spinners";

// var customers = [
//     { name: "Barajon Restaurant", img: "customer-1.png", 'bg-color':"bg-light" },
//     { name: "Shelby's Legendary Shawerma", img: "customer-2.png", 'bg-color':"" },
//     { name: "BaBaZ Shawerma Shawerma Grill", img: "customer-3.png", 'bg-color':"bg-light"},
//     { name: "Shish Mediterian Kitchen", img: "customer-4.png", 'bg-color':"" },
//     { name: "GiGs Indian Cuisine", img: "customer-6.png", 'bg-color':"bg-light" },
//     { name: "Hyatt Mosque", img: "customer-7.png", 'bg-color':"" },
//     { name: "Bark Marketing Agency", img: "customer-9.png", 'bg-color':"bg-light" },
//     { name: "KFC Restaurant", img: "customer-10.png", 'bg-color':"bg-light" },
//     { name: "BTRMLK Chicken Restaurant", img: "customer-11.png", 'bg-color':"" },
//     { name: "Rr 3 Superior Ave Shell", img: "customer-12.png", 'bg-color':"bg-light" },
// ];

function About() {

    const [loaded1 , setLoaded1] = useState(false);
    const [customers, setCustomers]= useState(null);

    useEffect(()=>{
        const image1 = new Image();
        image1.src='/storage/About.png';
        image1.onload = () => {
            setLoaded1(true);
        };
        fetch('/about/customers')
        .then(res => res.json())
        .then(data => setCustomers(data))
    },[]);

    return loaded1&&customers&&(
        <>
            <div id="reviews">
                <div className="container w-50">
                    <h2>WHY YOU SHOULD CHOOSE US?</h2>
                    <p>
                        Accompanying Our Cleaning Services, Just Try Cleaning
                        Also Offer A Full Laundry And Ironing Service To Our
                        Customers. Ironing Can Be Incorporated Into Your Regular
                        Domestic Cleaning Or Can Be Sorted Separately. Our
                        Highly Trained Cleaners Are Also Ironing Experts, And
                        Will Ensure That Every Item Is Crease-Free. We Will Iron
                        Everything From Shirts To Bedsheets, Towels To T-Shirts
                        - Simply Let Us Know What You’d Like Ironed And We’ll
                        Sort It For You.
                    </p>
                    <Link to="/about/reviews" id="reviews-button">
                        Reviews
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </div>
                <img src="/storage/About.png" alt="Cleaning" />
            </div>
            <div id="customers">
                <h2>Our Customers</h2>
                
                <ScrollContainer className="scroll-container">
                    {
                        customers.map((customer, index)=>(
                            <div key={index} id={`customer-${index}`}>
                                <div className={`avatar rounded-circle ${customer["background"]}`}>
                                    <img src={`/storage/${customer.image}`} alt="Logo" />
                                </div>
                                <h5>{customer.name}</h5>
                            </div>
                        ))
                    }
                </ScrollContainer>
                <div className="container scroll-buttons">
                    <button className="left"  onClick={()=>document.querySelector('.scroll-container').scrollLeft -= 400}><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="right" onClick={()=>document.querySelector('.scroll-container').scrollLeft += 400}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <Footer/>
        </>
    )||(<Spinners/>);
}

export default About;
