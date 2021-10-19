import React from "react";
import { useState, useEffect } from "react";


import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function EcommercePage() {
    const [products , setProducts] = useState([]);


    useEffect(() => {
    fetchProducts ();
}, [])

    const fetchProducts = () => {
        return fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProducts(json)) }


return (
    <div className="container ">
        <h1>hello</h1>
        <MDBRow className="product  d-flex">
        {products.map (product => {
        return (
                <MDBCol key={product.id} lg="3" md="4" className="mb-lg-3 mb-4 h-100">
                    <MDBCard className="align-items-center p-3">
                        <MDBCardImage
                            src={product.image}
                            alt="sample photo"
                            overlay="white-slight" />
                        <MDBCardBody className="text-center">
                            <Link to={`/product/${product.id}`} className="grey-text">
                                <h5>{product.title}</h5>
                            </Link>
                            <h5>
                                <strong>
                                    <a href="#!" className="dark-grey-text">
                                        Denim shirt{" "}
                                        <MDBBadge pill color="danger">
                                            NEW
                                        </MDBBadge>
                                    </a>
                                </strong>
                            </h5>
                            <h4 className="font-weight-bold blue-text">
                                <strong>{product.price}</strong>
                            </h4>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
        )
    })}
        </MDBRow>
    </div>
)

}

export default EcommercePage;