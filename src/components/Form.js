import React from "react";
import {
  withRouter
} from 'react-router-dom';


class Form extends React.Component {
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
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: '/tickets',
      state: { userDetails: this.state }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={this.handleChange}
         />
        <br />
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={this.handleChange}
          />
          <br />
          <input
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
          />
        <br />
      <div className="submit">
        <input type="submit" value="submit" />
      </div>
      </form>
    );
  }
}

export default withRouter(Form);