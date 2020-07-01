import React from 'react';

class Conditional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      howShow: false
    }

    this.changeShow = this.changeShow.bind(this);
  }

  changeShow(e) {
    if(e.target.name === '+') {
      this.setState ({
        show: true
      })
    }

    if(e.target.name === '-') {
      this.setState ({
        show: false
      })
    }

    if(e.target.name === '+2') {
      this.setState ({
        howShow: true
      })
    }

    if(e.target.name === '-2') {
      this.setState ({
        howShow: false
      })
    }

  }

  render() {
    if(this.state.show === false && this.state.howShow === false) {
      return(
        <div>
          <div id='ingredientsContainer'>
            <button id='ingredientsButton' name='+' onClick={(e) => this.changeShow(e)}>+</button>
          </div>
          <h2 id='ingredients'>Ingredients</h2>
          <div id='howToUseContainer'>
            <button id='howToButton' name='+2' onClick={(e) => this.changeShow(e)}>+</button>
          </div>
          <h2 id='howToUse'>How to Use</h2>
        </div>
      );
    }

    if(this.state.show === true && this.state.howShow === false) {
      return(
        <div>
          <div id='ingredientsContainer2'>
            <button id='ingredientsButton' name='-' onClick={(e) => this.changeShow(e)}>-</button>
            <div id='ingredientWidth'>
              <h3 id='ingredientContent'>{this.props.ingredients}</h3>
            </div>
          </div>
          <h2 id='ingredients2'>Ingredients</h2>
          <div id='howToUseContainer'>
            <button id='howToButton' name='+2' onClick={(e) => this.changeShow(e)}>+</button>
          </div>
          <h2 id='howToUse'>How to Use</h2>
        </div>
      );
    }

    if(this.state.show === false && this.state.howShow === true) {
      return(
        <div>
          <div id='ingredientsContainer'>
            <button id='ingredientsButton' name='+' onClick={(e) => this.changeShow(e)}>+</button>
          </div>
          <h2 id='ingredients'>Ingredients</h2>
          <div id='howToUseContainer2'>
            <button id='howToButton' name='-2' onClick={(e) => this.changeShow(e)}>-</button>
            <div id='howToWidth'>
              <h3 id='howToContent'>{this.props.howTo}</h3>
            </div>
          </div>
          <h2 id='howToUse2'>How to Use</h2>
        </div>
      );
    }

    if(this.state.show === true && this.state.howShow === true) {
      return(
        <div>
          <div id='ingredientsContainer2'>
            <button id='ingredientsButton' name='-' onClick={(e) => this.changeShow(e)}>-</button>
            <div id='ingredientWidth'>
              <h3 id='ingredientContent'>{this.props.ingredients}</h3>
            </div>
          </div>
          <h2 id='ingredients2'>Ingredients</h2>
          <div id='howToUseContainer2'>
            <button id='howToButton' name='-2' onClick={(e) => this.changeShow(e)}>-</button>
            <div id='howToWidth'>
              <h3 id='howToContent'>{this.props.howTo}</h3>
            </div>
          </div>
          <h2 id='howToUse2'>How to Use</h2>
        </div>
      );
    }

  }
}

export default Conditional;


