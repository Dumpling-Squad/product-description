import React from 'react';
import DetailPage from './DetailPage.jsx';
import Good from './Good.jsx';
import Related from './Related.jsx';
import axios from 'axios';

class CurrentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      amount: 1,
      shades: [],
      related: [],
      relatedPics: [],
      relatedPics2: [],
      goodArray: []
    }
    this.setImage = this.setImage.bind(this);
    this.getShades = this.getShades.bind(this);
    this.changePic = this.changePic.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.goodTo = this.goodTo.bind(this);
  }

  componentDidMount() {
    this.setImage();
    this.getShades();
    this.goodTo();
  }

  setImage() {
    axios.get(`/images/${this.props.id}`)
      .then(result => {
        this.setState ({
          image: result.data[0].image,
        })
      });

    axios.get(`/product/${this.props.details.title}`)
      .then(result => {
        var newArray = [];
        var relatedArray = [];
        var relatedArray2 = [];
        this.setState ({
          related: result.data
        })
        this.state.related.map(find => {
          newArray.push(find.id);
        })

        for (var i = 0; i < 6; i++) {
          axios.get(`/images/${newArray[i]}`)
            .then(result => {
              relatedArray.push(result.data[0].image);
            });
        }

        for (var i = 0; i < 2; i++) {
          axios.get(`/images/${newArray[i]}`)
            .then(result => {
              relatedArray2.push(result.data[0].image);
            });
        }
        this.setState ({
          relatedPics2: relatedArray2
        })

      });


  }

  getShades() {
    var num = 0;
    var array = [];

    this.props.shades.map(shade => {
      if(num < 6) {
        array.push(shade.shades);
        num++;
      }
    })

    this.setState ({
      shades: array
    })
  }

  changePic(e) {
    this.setState ({
      image: e.target.src
    })
  }

  changeAmount(e) {
    var num = this.state.amount;

    if(e.target.name === '-' && num > 0) {
      this.setState ({
        amount: (num - 1)
      })
    }

    if(e.target.name === '+') {
      this.setState ({
        amount: (num + 1)
      })
    }
  }

  goodTo() {
    var array = [];
    var newArray = [];
    var count = 0;

    for(var i = 0; i < 4; i++) {
      var num = Math.floor(Math.random() * 10);
      array.push(this.props.shades[num]);
    }

    for (var a = array.length - 1; a >= 0; a--) {
      for (var b = array.length - 1; b >= 0; b--) {
        if(array[a] == array[b] && a != b){
            delete array[b];
        }
      }
      if(array[a] != undefined) {
        newArray.push(array[a]);
      }
    }

    this.setState ({
      goodArray: newArray
    })
  }

  render() {
    return (
      // <img src={this.setImage}></img>
      <div>
        <div id='relatedContainer'>
          <Related pics={this.state.relatedPics} change={(e) => this.changePic(e)}/>
        </div>
        <img id='currentImage' src={this.state.image}></img>
        <div id='details'>
          <h2 id='currentTitle'>{this.props.details.title}</h2>
          <h2 id='currentSubtitle'>{this.props.details.subTitle}</h2>
          <h2 id='currentSub'>A new generation of {this.props.details.title.toLowerCase()}</h2>
          <div id='whatContainer'>
            <h2 id='currentWhat'>What it is: </h2>
            <h2 id='what'>{this.props.details.description}</h2>
          </div>
          <h2 id='currentSpecial'>Why It's Special: <br /></h2>
          <li id='bullet'>{this.props.details.specialty}</li>
          <h2 id='currentKnow'>Good To Know: <br /><br /></h2>
          <div id='iconContainer'>
            {this.state.goodArray.map(know => (
              <Good good={know}/>
            ))}
          </div>
          <h2 id='tested'>All of our products are dermatologist tested</h2>
          <div id='shadeTiles'>
            {this.state.shades.map(shade => (
              <DetailPage shade={shade}/>
            ))}
          </div>
          <div id='purchaseLine'>
            <div id='amountBox'>
              <button name='-' id='minusButton' onClick={(e) => this.changeAmount(e)}>-</button>
              <h2 id='amountState'>{this.state.amount}</h2>
              <button name='+' id='plusButton' onClick={(e) => this.changeAmount(e)}>+</button>
            </div>
            <button id='purchase'><h2 id='purchaseText'>Add to Bag - ${(this.props.details.price * this.state.amount)}</h2></button>
          </div>
          <div id='free'>
            <h3 id='firstFree'>Free & Easy Returns </h3>
            <h3> • Free Sample with order</h3>
          </div>
          <h2 id='saveSets'>Save with sets</h2>
          <div id='relatedContainer2'>
            <Related pics={this.state.relatedPics2}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentPage;