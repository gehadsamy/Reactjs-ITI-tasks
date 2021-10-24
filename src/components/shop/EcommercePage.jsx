import React from "react";
import { useState, useEffect } from "react";


import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
        {/* <h1>hello</h1> */}
        <MDBRow className="product">
        {products.map (product => {
        return (
                <MDBCol key={product.id} className="mb-3 col-md-4 col-lg-3 col-sm-6 col-12">
                    <MDBCard className="align-items-center py-3 px-2 h-100">
                        <Link to={`/product/${product.id}`} className="text-center">
                            <MDBCardImage
                                src={product.image}
                                alt="sample photo"
                                overlay="white-slight" style={{'width':'50%'}} />
                        </Link>
                        
                        <MDBCardBody className="text-center" style={{'padding': '0', 'paddingTop': '20px'}} >
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
                        <div className="d-flex justify-content-center align-items-center">
                            <Button>Add to Cart</Button>
                        </div>
                    </MDBCard>
                </MDBCol>
        )
    })}
        </MDBRow>
    </div>
)

}

export default EcommercePage;