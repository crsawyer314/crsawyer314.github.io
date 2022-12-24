import React, { Component } from "react";
import PropTypes from "prop-types";



class Picker extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        dinners: {
            "vindaloo curry": ['rice','indian','curry'],
            "japanese curry": ['rice','japanese','asian','curry'],
            "tikka masala":[],
            "kichdi":[],
            "orange chicken":[],
            "bourbon chicken":[],
            "beef&broccoli":[],
            "chicken&rice":[],
            "hawaiian haystacks":[],
            "sewwt&sour chicken":[],
            "kung pao chicken":[],
            "koshari":[],
            "maqluba":[],
            "chaufa":[],
            "bulgogi":[],
            "bibimbap":[],
            "sushi":[],
            "stuffed peppers":[],
            "thai basil chicken":[],
            "green bean chicken":[],
            "teriyaki chicken":[],
            "mongolian beef":[],
            "fried rice":['rice'],
            "pad thai":['pasta'],
            "gochujang":[],
            "spaghetti marinara":[],
            "spaghetti & meatballs":[],
            "spaghetti & meat sauce":[],
            "red casserole/goulash":[],
            "mac&cheese":[],
            "beef stroganoff":[],
            "tsuvian":[],
            "chow mein":[],
            "singapore noodles":[],
            "spaghetti carbonara":[],
            "lemon chicken pasta":[],
            "pesto":[],
            "eggplant/chicken parmesan":[],
            "reuben":["sandwich"],
            "french dip":[],
            "monte cristo":[],
            "tom-boys":[],
            "toasted cheese":[],
            "toasted tuna":[],
            "sloppy joes":[],
            "minestrone":["soup"],
            "lemony greek soup":[],
            "french onion":[],
            "chicken & dumplings":[],
            "shakshouka":[],
            "beef stew":[],
            "ghormesh sabzi":[],
            "corn chowder":[],
            "chicken noodle":[],
            "tomato soup":[],
            "quesadillas":["bread/tortilla"],
            "falafel":[],
            "korean dumplings":[],
            "thai dumplings":[],
            "pizza":[],
            "chicken pot pie":[],
            "shepherd's pie":[],
            "pastel de choclo":[],
            "tacos":[],
            "kebab":[],
            "steak":[],
            "ham":[],
            "turkey":[],
            "meatloaf":[],
            "salmon":[],
            "pot roast":[],
            "ribs":[],
            "chicken&pan sauce":[],
            "corned beef":[],
            "ethiopian cabbage":[],
            "hot dogs & beans":[],
            "french fries/roasted veggies":[],
            "frozen asian chicken things":[]
        },
        chosenDinner:""
      };
      this.handleClick = this.handleClick.bind(this);
      
    }
    
    handleClick(){
        const entries = Object.entries(Object.keys(this.state.dinners));
        const randomIndex = Math.floor(Math.random() * entries.length);
        console.log(entries[randomIndex][1], randomIndex)
        this.setState({chosenDinner: entries[randomIndex][1]});
      }

    render() {
        return (
            <div>
      <button onClick={this.handleClick}>Select random item</button>
      <h1>Your Dinner: {this.state.chosenDinner}</h1>
    </div>
        )
    }
}
Picker.propTypes = {
    // children: PropTypes.node.isRequired,
    
    styles: PropTypes.shape({
        root: PropTypes.object,
        submenu: PropTypes.object,
        menu: PropTypes.object
    }),
    itemList : PropTypes.array,
    title: PropTypes.string
}

Picker.defaultProps = {
    // styles: {},
    itemList: [],
    title: ''
}

export default Picker;