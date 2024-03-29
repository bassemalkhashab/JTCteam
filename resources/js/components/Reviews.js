import React, { useState, useEffect } from "react";
import { Form, Button, ButtonGroup, ToggleButton, Spinner } from "react-bootstrap";
import Footer from "./Footer";
import Spinners from "./Spinners";


function Reviews() {
    const [reviews, setReviews] = useState("");
    const [radioValue, setRadioValue] = useState("1");
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [image, setImage] = useState(null);
    const [photos, setPhotos] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg]= useState(false);
    const [failedMsg, setFailedMsg]= useState(false);
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
            if ( data.length > 0){
                setReviews(data)
                data.forEach((review, index)=>{
                    imgs[index]=new Image();
                    imgs[index].src=`/storage/${review['image']}`;
                    imgs[imgs.length - 1].onload=setPhotos(true);
            })}
            else{
                setPhotos(true);
                setReviews(true)
            }
        })

        
    },[]);

    function handleReviewSubmit(e) {
        e.preventDefault();
        document.querySelector('#submit-button').innerHTML="";
        setIsLoading(true);
        const inputFile = document.querySelector('input[type="file"]');
   
        // console.log(inputFile)
        const myData = {
            name: name||"why no name",
            stars: radioValue||"1",
            review: review|| "why no review",
        }
        const myFile=new FormData();
        myFile.append('image', inputFile.files[0]);
        myFile.append('data',JSON.stringify(myData));

        

        const reviewOptions = {
            method: "POST",
            body:myFile
        };
        fetch('/about/reviews', reviewOptions)
        .then(res => res.json())
        .then((data)=> {
            if (data.success == true){
                setSuccessMsg('true');
                if (reviews.length > 0){
                setReviews([...reviews,{
                    name: name||"why no name",
                    stars: radioValue||"1",
                    image: data.image,
                    review: review|| "why no review"
                }])}
                else{
                    setReviews(
                        [{
                            name: name||"why no name",
                            stars: radioValue||"1",
                            image: data.image,
                            review: review|| "why no review"
                        }]
                    )
                }
            }
            else{
                setSuccessMsg('false');
                setFailedMsg(data.errors.image[7])
            }
            // console.log(inputFile)
            
        })
        .then(()=>{
            const submitButton = document.querySelector('#submit-button');
            
            setIsLoading(false);
            submitButton.style.backgroundColor="#0b5ed7";
            submitButton.innerHTML="Submit";
            document.querySelector("#form-body").style.display ="none";
            document.querySelector("#review-form").reset();
        })
    }

    return reviews&&photos&&(
        <>
            <div id="form-body">
                <button onClick={()=>document.querySelector('#form-body').style.display='none'} id="close-btn-2"></button>
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
                        id="submit-button"
                        variant="primary"
                        type="submit"
                    >
                        Submit
                        {isLoading&&<Spinner id="#spinner-border" animation="border" variant="light"  />}
                    </Button>
                </Form>
            </div>
            <div className="container add-review d-flex justify-content-between my-3">
                <h2 className="d-inline-flex">Reviews</h2>
                <button
                    className="btn-style-1 add-review-button"
                    onClick={() => {
                        document.querySelector("#form-body").style.display ="flex";
                    }}
                >
                    <i className="fa-solid fa-plus"></i>Add review
                </button>
            </div>
            <div className="reviews-container">
            {successMsg&&<div className={`alert alert-${successMsg == 'true'?'success':'danger'} review`} role="alert">
                {successMsg== 'true'?'Thank you for sending your review':failedMsg}
            </div>}
                {reviews.length > 0 ? reviews.map((review, index) => (
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
                )):<h5 className="d-flex align-items-center justify-content-center vh-100">No reviews to show</h5>}
            </div>
            <Footer/>
        </>
    )||<Spinners/>;
}

export default Reviews;
