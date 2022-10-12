import React, { Component } from "react";
import PropTypes from "prop-types";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const defaultStyles = {}

class Submenu extends Component {
    constructor(props) {
      super(props);
  
      this.state = {}
    }

    render() {
       
    const items = this.props.itemList.map(i => <li><Typography>{i}</Typography></li>);
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                <Typography>{this.props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <ul>
                    {items}
                </ul>
                </AccordionDetails>
            </Accordion>
        )
    }
}
Submenu.propTypes = {
    children: PropTypes.node.isRequired,
    
    styles: PropTypes.shape({
        root: PropTypes.object,
        submenu: PropTypes.object,
        menu: PropTypes.object
    }),
    itemList : PropTypes.array,
    title: PropTypes.string
}

Submenu.defaultProps = {
    // styles: {},
    itemList: [],
    title: ''
}

export default Submenu;