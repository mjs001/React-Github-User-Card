import React from "react";
import axios from "axios";

class Followers extends React.Component {
  constructor() {
    super();
    this.state = {
      Followers: [],
    };
  }

  componentDidMount() {
    axios.get(" https://api.github.com/users/mjs001/followers").then((res) => {
      console.log(res);
      this.setState({
        Followers: res.data,
      });
    });
  }

  render() {
    return (
      <div className="followersAll">
        {this.state.Followers.map((follower) => (
          <div className="followers">
            <h1>{follower.login}</h1>
            <img src={follower.avatar_url}></img>
            <a href={follower.repos_url} target="_blank">
              <small>{follower.repos_url}</small>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Followers;
