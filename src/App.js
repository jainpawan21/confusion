import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props){
<<<<<<< HEAD

    super(props);

    this.state ={
=======
    super(props);

    this.state = {
>>>>>>> b69f1938d937a304eb5374cf9696385f480285b4
      dishes: DISHES
    };
  }
  render() {
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristornate Con Fusion</NavbarBrand>

          </div>
        </Navbar>
<<<<<<< HEAD
        <Menu dishes={this.state.dishes}/>
=======
        <Menu dishes={this.state.dishes} />
>>>>>>> b69f1938d937a304eb5374cf9696385f480285b4
      </div>
    );
  } 
}

export default App;
