import React from 'react';
import ProductPage from './ProductPage.jsx';
import CurrentPage from './CurrentPage.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      details: [],
      additional: [],
      id: 0,
      productPage: true,
      currentPage: false
    }
    this.getImages = this.getImages.bind(this);
    this.getDetails = this.getDetails.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
    this.getAdditional = this.getAdditional.bind(this);
  }

  componentDidMount() {
    this.getImages();
    this.getDetails();
    this.getAdditional();
  }

  getImages() {
    axios.get('/images')
      .then(result => {
        this.setState ({
          images: result.data
        })
      })

  }

  getDetails() {
    axios.get('/product')
      .then(result => {
        this.setState ({
          details: result.data
        })
      })
  }

  getAdditional() {
    axios.get('/details')
      .then(result => {
        this.setState ({
          additional: result.data
        })
      })
  }

  selectProduct(e) {
    this.setState ({
      productPage: false,
      currentPage: true,
      id: e.target.name
    })
  }

  render() {
    if(this.state.productPage === true) {
      return (
        <div>
          <header id='head'><img src='https://mock-website-shades.s3-us-west-1.amazonaws.com/bar.jpg'></img></header>
          <div id = 'ProductPage'>
            {this.state.images.map(image => (
              <ProductPage images = {image} select = {(e) => this.selectProduct(e)}/>
            ))}
          </div>
        </div>
      );
    }

    if(this.state.currentPage === true) {
      return (
        <div>
          <header id='head'><img src='https://mock-website-shades.s3-us-west-1.amazonaws.com/bar.jpg'></img></header>
          <CurrentPage id={this.state.id} details={this.state.details[this.state.id - 1]} add={this.state.additional[this.state.id - 1]} shades={this.state.additional}/>
        </div>
      );
    }
  }
}

export default App;