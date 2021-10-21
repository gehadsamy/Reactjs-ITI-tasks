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
          <MDBCol key={product.id} lg="8" md="8">
            <MDBCard className="d-flex flex-row align-items-center">
              <MDBCardImage
                src={product.image}
                alt="sample photo"
                overlay="white-slight"
                className="img-fluid w-25 col-md-4 m-2"
              />
              <MDBCardBody className="col-md-8">
                <Link to={`/product/${product.id}`} className="grey-text">
                  <h5>{product.title}</h5>
                </Link>
                <h5>
                  <strong>
                    {product.category}
                    <MDBContainer>
                      <ReactStars
                        count={5}
                        size={24}
                        isHalf={true}
                        value={product.rating.rate}
                        activeColor="#ffd700"
                      />
                    </MDBContainer>
                    <MDBBadge pill color="danger">
                      NEW
                    </MDBBadge>
                  </strong>
                </h5>
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
