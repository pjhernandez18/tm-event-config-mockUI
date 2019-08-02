import React, {Component} from 'react'
import {Button, Typography, Row, Column, Spacing, Input} from "@ticketmaster/aurora";
import axios from 'axios';
// ES6 Structure 

class Discover extends Component {

    constructor(props) {
      super(props);
      this.state = {
        results: [ ],
        displayResults: false,
        secureFlag: false
      }
    }
    
    handleInput = event => {
      this.setState({ eventID: event.target.value})
    };


    /* Performs AJAX call to TM Discovery API */
    componentDidMount() {
    
      let apikey = 'o6dBO7FUqTVE1t9zbBIjBm0hNVg9G19a' 
      let url = 'https://app.ticketmaster.com/discovery/v2/events/vv170Z4JGkwbqwCm.json?includePast=yes&apikey='+apikey+'&extensions=ticketmaster&view=internal&clientVisibility=harrypotter,public,presence'
      axios.get(url)
        .then(res => {
          const data = res.data;
          this.setState({results: data, secureFlag: data.extensions.ticketmaster.secureEntry.retEnabled});
        })
    }

    handleClick = () => { /* This needs to take what's in the text field and display its results */
      this.setState({displayResults: true});
    }
    
    render() {
      let response = null
      let flag = this.state.secureFlag
      if ( this.state.displayResults ) {
        if (flag) {
          response = (
            /* Have freedom here to use Aurora UI Elements to get response*/
          <Typography.H4>
                {this.state.results.name} - "secureEntry": "retEnabled": true
          </Typography.H4>
          )
        } else {
          response = (
            /* Have freedom here to use Aurora UI Elements to get response*/
          <Typography.H4>
                {this.state.results.name} - "secureEntry": "retEnabled": false
          </Typography.H4>
          )
        }
        
      }
      return (
        <div>
            <Row>
              <Column
                large={3}
                medium={3}
                xLarge={3}
              >
                <Input
                  label='Event'
                  name='eventid'
                  placeholder='Event Static ID'
                  size='large'
                /> 
          </Column>  
      </Row>
      <Spacing top={{"xSmall":"normal"}} />
          <Row>
            <Column
              large={2}
              medium={2}
              xLarge={2}
            >
              <Button variant='special' size='regular' onClick={this.handleClick}>Discover</Button>
            </Column>
          </Row>
          <Spacing top={{"xSmall":"normal"}} />
          <Row>
            <Column
                large={4}
                medium={4}
                xLarge={4}
              > 
              {response}
              </Column>`
          </Row>
        </div>
      )
  }
}
    
export default Discover;
    
 
        