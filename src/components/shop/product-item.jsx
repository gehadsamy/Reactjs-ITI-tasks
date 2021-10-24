import React, { Component } from "react";
import { useState, useEffect } from "react";
// import { MDBContainer, MDBRating } from 'mdbreact';

import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBContainer,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
// import { MDBContainer, MDBRating } from 'mdbreact';

const ProductItem = ({ match }) => {
  const [product, setProducts] = useState();

  useEffect(() => {
    getProductsdetails();
  }, []);
//   const ratingChanged = (newRating) => {
//     console.log(newRating);
//   };

  const getProductsdetails = () => {
    return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <div>
      {product ? (
        <div className="w-100 d-flex justify-content-center mt-5">
          <MDBCol key={product.id} className="col-md-7">
            <MDBCard className="d-flex flex-row align-items-center p-4">
              <MDBCardImage
                src={product.image}
                alt="sample photo"
                overlay="white-slight"
                className="img-fluid w-25 col-md-5 m-2"
              />
              <MDBCardBody className="col-md-7 pl-5 h-100">
                <h2 className="grey-text w-100 d-inline mr-3">{product.title}</h2>
                <span style={{'position': 'relative', 'top': '-5px'}}>
                  <MDBBadge style={{'fontSize':'100%'}} pill color="danger">
                    NEW
                  </MDBBadge>
                </span>
                <h3 className="mt-2">
                  <strong>
                    {product.category}
                    <ReactStars
                        count={5}
                        size={30}
                        isHalf={true}
                        value={product.rating.rate}
                        activeColor="#ffd700"
                      />
                  </strong>
                </h3>
                <h4 className="font-weight-bold blue-text">
                  <strong>{product.price}$</strong>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      ) : (
        <div className="d-flex">
          <MDBSpinner
            grow
            color="secondary"
            className="spinner"
            style={{ width: "10rem", height: "10rem", margin: "5rem auto" }}
          >
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
