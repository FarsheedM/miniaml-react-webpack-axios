import React, {Component} from 'react';
import axios from 'axios';


export default class extends Component {
  constructor(props){
    super(props);
    this.state= {greeting: "-"};
  }
    componentDidMount() {
      /*axios.get("https://jsonplaceholder.typicode.com/users/1")*/
      axios.get("http://localhost:8888/greeting")
      .then(response => {
        console.log(response.data);
        this.setState({greeting: response.data})
      })
      .catch(error => {
        console.log(error)
      })
    }
  
    render() {
      return (
        <div>
          <p>Herzlich Willkommen!</p>
          <span>{this.state.greeting}</span>
        </div>
      )
    }
  }