import React from "react";
import axios from "axios";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      User: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/mjs001").then((res) => {
      console.log(res);
      this.setState({
        User: res.data,
      });
    });
  }

  render() {
    return (
      <div className="user">
        <h1>{this.state.User.name}</h1>
        <img src={this.state.User.avatar_url}></img>
        <h1>{this.state.User.login}</h1>
        <h3>Followers: {this.state.User.followers}</h3>
        <h3>Following: {this.state.User.following}</h3>
      </div>
    );
  }
}

export default User;
