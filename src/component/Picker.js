import React, { Component } from "react";
import PropTypes from "prop-types";


class Picker extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        dinners: {
            "vindaloo curry": ['rice','indian','curry'],
            "japanese curry": ['rice','japanese','asian','curry'],
            "tikka masala":['rice','indian','curry', "chicken", "chickpeas"],
            "kichdi":["rice", "indian", "lentils"],
            "orange chicken":["rice", "asian", "chicken"],
            "bourbon chicken":["rice", "asian", "chicken"],
            "beef & broccoli": ["rice", "chinese", "beef", "broccoli"],
            "chicken & rice": ["rice", "american", "chicken"],
            "hawaiian haystacks":["rice", "american", "chicken", "vegetables"],
            "sweet & sour chicken": ["rice", "chinese", "chicken"],
            "kung pao chicken": ["rice", "chinese", "chicken", "peanuts"],
            "koshari":["rice", "egyptian", "pasta", "lentils", "onions","tomato", "chickpeas"],
            "maqluba":["rice", "middle east", "chicken", "beef", "cauliflower", "tomato", "eggplant", "potato"],
            "chaufa":["rice", "peruvian", "chicken", "soy sauce", "oyster sauce", "sesame oil"],
            "bulgogi": ["rice", "korean", "beef"],
            "bibimbap": ["rice", "korean"],
            "sushi": ["rice", "japanese", "fish"],
            "stuffed peppers": ["rice", "american", "beef", "peppers"],
            "thai basil chicken": ["rice", "thai", "chicken"],
            "green bean chicken": ["rice", "chinese", "chicken", "green beans"],
            "teriyaki chicken": ["rice", "japanese", "chicken"],
            "mongolian beef": ["rice", "chinese", "beef"],
            "fried rice": ["rice"],
            "pad thai": ["noodles", "thai"],
            "gochujang":["noodles", "korean", "chicken", "onion", "bell pepper"],
            "spaghetti marinara": ["pasta", "italian"],
            "spaghetti & meatballs": ["pasta", "italian", "beef"],
            "spaghetti & meat sauce": ["pasta", "italian", "beef"],
            "red casserole/goulash": ["pasta", "italian", "beef"],
            "mac & cheese": ["pasta", "american"],
            "beef stroganoff": ["pasta", "russian", "beef"],
            "chow mein": ["noodles", "chinese"],
            "singapore noodles": ["noodles", "singaporean"],
            "spaghetti carbonara": ["pasta", "italian"],
            "lemon chicken pasta": ["pasta", "chicken"],
            "pesto": ["pasta", "italian"],
            "eggplant/chicken parmesan": ["pasta", "italian", "eggplant", "chicken"],
            "reuben": ["sandwich", "american",],
            "french dip": ["sandwich", "american",],
            "monte cristo": ["sandwich", "american",],
            "tom-boys": ["sandwich", "american",],
            "toasted cheese": ["sandwich", "american",],
            "toasted tuna": ["sandwich", "american", "tuna"],
            "sloppy joes": ["sandwich"],
            "minestrone": ["soup", "italian"],
            "lemony greek soup": ["soup", "greek"],
            "french onion": ["soup", "french"],
            "chicken & dumplings": ["soup", "chicken"],
            "shakshouka": ["eggs", "tomato"],
            "beef stew": ["beef"],
            "ghormeh sabzi": ["stew", "iranian", "beef", "rice"],
            "corn chowder": ["soup"],
            "chicken noodle": ["soup", "chicken"],
            "tomato soup": ["soup"],
            "quesadillas": ["tortilla", "mexican"],
            "falafel": ["bread"],
            "korean dumplings in a tortilla": ["korean"],
            "thai dumplings in a tortilla": ["other", "thai", "cabbage", "easy"],
            "pizza": ["bread", "italian"],
            "chicken pot pie": ["chicken"],
            "shepherd's pie": ["beef"],
            "pastel de choclo":["other", "chilean", "chicken", "beef", "corn"],
            "chicken & pan sauce": ["chicken"],
            "corned beef": ["soup", "irish", "beef", "cabbage", "carrots", "potatoes"],
            "ethiopian cabbage": ["cabbage"],
            "hot dogs & beans":["bread", "american", "easy"],
            "french fries/roasted veggies":["other", "american", "easy"],
            "frozen asian chicken things":["rice", "asian", "easy"]
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
      const { dinners, chosenDinner } = this.state;
      const dinnerInfo = dinners[chosenDinner] || [];

      return (
        <div>
          <button onClick={this.handleClick}>Select random item</button>
          <h1>Your Dinner: {chosenDinner}</h1>
          <ul>
            {dinnerInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
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
