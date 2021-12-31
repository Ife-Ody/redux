import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    //call action

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="post" onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <br />
            <input
              type="text"
              name="title"
              id=""
              value={this.state.title}
              onChange={this.onChange}
            ></input>
          </div>
          <br />
          <div>
            <label htmlFor="body">Body: </label>
            <br />
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="3"
              value={this.state.body}
              onChange={this.onChange}
            ></textarea>
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(Postform);
