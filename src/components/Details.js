import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: '/tickets',
      state: { userDetails: this.state }
    });
  }

  render() {
    return (
      <div>  
        <h2>Please Enter Your Details</h2>
        <Form>
          <FormControl 
            name='firstName'
            placeholder='First name'
            value={this.state.firstName}
            onChange={ (e) => { this.handleChange(e); } }/>
          <br />
          <FormControl 
            name='lastName'
            placeholder='Last name'
            value={this.state.lastName}
            onChange={ (e) => { this.handleChange(e); } }/>
          <br />
          <FormControl 
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={ (e) => { this.handleChange(e); } }/>
          <br />
          <Button onClick={ (e) => this.handleSubmit(e) }>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Details;