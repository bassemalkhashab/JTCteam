import React, { useState, useEffect } from "react";
import { Form, Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import Footer from "./Footer";
import Spinners from "./Spinners";


function Reviews() {
    const [reviews, setReviews] = useState("");
    const [radioValue, setRadioValue] = useState("1");
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [image, setImage] = useState(null);
    const [photos, setPhotos] = useState(false);
    const radios = [
        { name: "1", value: "1" },
        { name: "2", value: "2" },
        { name: "3", value: "3" },
        { name: "4", value: "4" },
        { name: "5", value: "5" },
    ];


    useEffect(()=>{
        let imgs = []
        fetch('/about/get-reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
            data.forEach((review, index)=>{
                imgs[index]=new Image();
                imgs[index].src=`/storage/${review['image']}`;
                imgs[imgs.length - 1].onload=setPhotos(true);
            })
        })

        
    },[reviews]);

    function handleReviewSubmit(e) {
        e.preventDefault();
       
        const inputFile = document.querySelector('input[type="file"]');
   
        console.log(inputFile)
        const myData = {
            name: name||"why no name",
            stars: radioValue||"1",
            review: review|| "why no review",
        }
        const myFile=new FormData();
        myFile.append('image', inputFile.files[0]);
        myFile.append('data',JSON.stringify(myData));

        reviews.push({
            name: name||"why no name",
            stars: radioValue||"1",
            image: inputFile.files[0],
            review: review|| "why no review"
        })

        const reviewOptions = {
            method: "POST",
            body:myFile
        };
        fetch('/about/reviews', reviewOptions)
        .then(res => res.json())
        .then(data=> console.log(data))
        .then(document.querySelector("#form-body").style.display ="none")
    }

    return reviews&&photos&&(
        <>
            <div id="form-body">
                <Form
                    className="container"
                    id="review-form"
                    onSubmit={handleReviewSubmit}
                    encType="multipart/form-data"
                >
                    <button
                        type="reset"
                        className="close-btn"
                        onClick={() => {
                            document.querySelector("#form-body").style.display =
                                "none";
                        }}
                    >
                        <i className="fa-solid fa-x"></i>
                    </button>
                  
                    <Form.Group
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        controlId="name"
                        name="name"
                        id="name"
                    >
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        controlId="formBasicPassword"
                    >
                        <Form.Label>Review</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Add your review"
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        controlId="formFile"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="mb-3"
                    >
                        <Form.Label>Place your avatar (Optional)</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <div className="d-flex flex-column my-3" id="rating-group">
                        <Form.Label>Rating</Form.Label>
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant={"outline-danger"}
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) =>
                                        setRadioValue(e.currentTarget.value)
                                    }
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>

                    <Button
                        className="w-100 my-3"
                        variant="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="container add-review d-flex justify-content-between">
                <h2 className="d-inline-flex">Reviews</h2>
                <button
                    className="btn-style-1 add-review-button"
                    onClick={() => {
                        document.querySelector("#form-body").style.display =
                            "flex";
                    }}
                >
                    <i className="fa-solid fa-plus"></i>Add review
                </button>
            </div>
            <div className="reviews-container">
                {reviews.map((review, index) => (
                    <div className="review" key={index}>
                        <img
                            className="rounded-circle"
                            src={`/storage/${review.image}`}
                            alt="Avatar"
                        />
                        <h4>{review.name}</h4>
                        <div className="stars d-flex">
                            {(() => {
                                let stars = [];
                                for (
                                    let i = 0;
                                    i < parseInt(review.stars);
                                    i++
                                ) {
                                    stars.push(
                                        <i
                                            className="fa-solid fa-star"
                                            key={i}
                                        ></i>
                                    );
                                }
                                return stars;
                            })()}
                        </div>
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    )||<Spinners/>;
}

export default Reviews;
