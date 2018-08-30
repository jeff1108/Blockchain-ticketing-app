import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import css from '../style/details.css';

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
      <div className='user-form'>
        <h2 id='intro-text'>Blockchain verified tickets!</h2>
        <h3>Register to find events near you</h3>
        <Form className='input-form'>
          <FormControl
            id='firstName'
            name='firstName'
            placeholder='First name'
            value={this.state.firstName}
            onChange={ (e) => { this.handleChange(e); } }/>
          <br />
          <FormControl
            id='lastName'
            name='lastName'
            placeholder='Last name'
            value={this.state.lastName}
            onChange={ (e) => { this.handleChange(e); } }/>
          <br />
          <FormControl
            id='email'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={ (e) => { this.handleChange(e); } }/>
          <br />
          <Button className='btn btn-primary' onClick={ (e) => this.handleSubmit(e) }>SUBMIT</Button>
        </Form>
      </div>
    );
  }
}

export default Details;
