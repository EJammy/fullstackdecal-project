import React from "react";

class Review extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write a review'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      
      event.preventDefault();
      
    }
  
    render() {
      return (
        <form>
            <label>Review: </label>
            <input type = "text" id = "Review"></input>
            <input type="submit"></input>
        </form>
        
      );
    }
  }

  export default Review;