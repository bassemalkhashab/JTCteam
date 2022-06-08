import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="container">
            <div className="reviews">
                <h2>WHY YOU SHOULD CHOOSE US?</h2>
                <p>
                    Accompanying Our Cleaning Services, Just Try Cleaning Also
                    Offer A Full Laundry And Ironing Service To Our Customers.
                    Ironing Can Be Incorporated Into Your Regular Domestic
                    Cleaning Or Can Be Sorted Separately. Our Highly Trained
                    Cleaners Are Also Ironing Experts, And Will Ensure That
                    Every Item Is Crease-Free. We Will Iron Everything From
                    Shirts To Bedsheets, Towels To T-Shirts - Simply Let Us Know
                    What You’d Like Ironed And We’ll Sort It For You.
                </p>
                <Link>
                    <h3>Reviews</h3>
                    <i class="fa-solid fa-chevron-right"></i>
                </Link>
                <img src="/storage/About.png" alt="Cleaning" />
            </div>
        </div>
    );
}

export default About;
