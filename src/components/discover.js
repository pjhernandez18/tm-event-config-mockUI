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
        secureFlag: false,
        eventID: ''
      } 
    }

    handleChange = event => {
      this.setState({eventID: event.target.value});
    }

    handleSubmit = event => {
      // Stop the browser from reloading the page
      event.preventDefault();

      let id = this.state.eventID
      let apikey = 'o6dBO7FUqTVE1t9zbBIjBm0hNVg9G19a' 
      let url = 'https://app.ticketmaster.com/discovery/v2/events/ticketmaster-us/'+id+'.json?includePast=yes&apikey='+apikey+'&extensions=ticketmaster&view=internal&clientVisibility=harrypotter,public,presence'
      console.log(url)
      axios.get(url)
        .then(res => {
          const data = res.data;
          this.setState({results: data, secureFlag: data.extensions.ticketmaster.secureEntry.retEnabled, displayResults: true});
        })
        .catch(function (error) {
            alert(error)
        });
      
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
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Column
                large={3}
                medium={3}
                xLarge={3}
              >
                <Input
                  label='Event'
                  name='eventid'
                  type='text'
                  placeholder='Event Static ID'
                  size='large'
                  onChange={this.handleChange}
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
              <Button variant='special' size='regular' type='submit'>Discover</Button>
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
          </form>
        </div>
      )
  }
}
    
export default Discover;
    
 
        