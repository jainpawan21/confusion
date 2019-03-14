import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle
  , BreadcrumbItem ,Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom'

export default function SelectedDishes(props) {

    console.log(props.dis);
   
    if (props.dis != null) {

    const renderComments = (dishComments) => dishComments.map(comment => {
        return (
        <div key={comment.id}> 
        <p> {comment.comment} </p>
        <p> --{comment.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
        </div>
        ) 
    });

    return(
        <div className="container">
        <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dis.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dis.name}</h3>
                    <hr />
                </div>
        </div>
                  <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                      <Card>
                        <CardImg top src={props.dis.image} alt={props.dis.name} />
                        <CardBody>
                          <CardTitle>{props.dis.name}</CardTitle>
                          <CardText>{props.dis.description}</CardText>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                      <h4>Comments</h4>
                      {/* {renderComments(props.comments)} */}
                    </div>
                  </div>
        </div>
    
    );
       }
else
    return(
      
        <div>
            
            <h1>PAWAN JAIN</h1>
        </div>
    );
}