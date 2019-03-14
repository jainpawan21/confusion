import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


export default function SelectedDishes(props) {

    
   
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
              {renderComments(props.dis.comments)}
            </div>
          </div>
        </div>
    
    );
       }
else
    return(
        <div>
            
        </div>
    );
}