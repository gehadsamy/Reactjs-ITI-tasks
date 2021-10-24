import { Button } from "react-bootstrap";
import React, { Component, Profiler } from "react";
import profile from './profile.jpg';
import {CardBody} from './Profile.css';
import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBContainer,
  MDBSpinner,
} from "mdb-react-ui-kit";
export default class Home extends Component {

  render() {
    return <div>
       <div className="w-100 d-flex justify-content-center mt-5">
          <MDBCol className="col-md-7">
            <MDBCard className="CardBody d-flex flex-row align-items-center p-4">
              <MDBCardImage
                src={profile}
                alt="sample photo"
                overlay="white-slight"
                className="img-fluid w-25 col-md-5 m-2"
              />
              <MDBCardBody className="col-md-7 pl-5 h-100">
  
                <p className="mt-2">
                 
                  I am professional native PHP and Wordpress developer with Bachelor degree in Computer Engineering .
I have been working with many operating systems including Windows and Linux, intermediate knowledge about JS, HTML5 , Angular , Reactjs , SASS and CSS3. Task-oriented developer who cares much about time and delivery , dedicated in dealing with the small details which make difference and also quality matters
                </p>
              
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
        <p></p>
    </div>
    
  }
}
