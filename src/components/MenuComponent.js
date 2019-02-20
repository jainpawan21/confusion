import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);
        
        this.state = {
<<<<<<< HEAD
            selectedDish : null
        }
        console.log('Menu Component Constructor is invoked');
    }
    componentDidMount(){
        console.log('Menu Component componentDidMount is invoked');
    }

    onDishSelect(dish)
    {
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                   <CardImg width="s100%" src={dish.image} alt={dish.name} />
                   <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>  
                     
                    </CardBody>      
                </Card>

            );
        }
        else{
            return(
                <div></div>
            );
        }
=======
            selectedDish: null
           
        }
    }
    onDishSelect(dish){
        this.setState({ selectedDish: dish});
    }

    renderDish(dish){
        if(dish != null)
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );

        
        else
            return(
                <div></div>
            );
        
>>>>>>> b69f1938d937a304eb5374cf9696385f480285b4
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
<<<<<<< HEAD
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        
                        <CardImg width="s100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                           
                        </CardImgOverlay> 
                    </Card>     
                      
=======
                <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onclick={() => this.onDishSelect(dish)}>
                        
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                    
                            <CardTitle>{dish.name}</CardTitle>
                            
                          
                        </CardImgOverlay> 
                    </Card>
>>>>>>> b69f1938d937a304eb5374cf9696385f480285b4
                </div>
            );
        });
         
        console.log('Menu Component render is invoked');
        
        return( 
            <div classNme="container">
                <div className ="row">
                    
                        { menu }
<<<<<<< HEAD
                  
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
=======
                
>>>>>>> b69f1938d937a304eb5374cf9696385f480285b4

                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>

        );
    }
}


export default Menu;