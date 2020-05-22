import React from "react";
import Postlist from "./Postlist";

class Posts extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      urlLink: "",
      rssItems: [],
    };
  }

  handleUrlName = (e) => {
    const { value } = e.target;
    this.setState({ urlLink: value });
  };

  validateUrl = () => {
    const urlLink = this.state.urlLink.trim();
    if (urlLink === "") {
      alert("User name is blank");
      this.setState({ rssItems: [] });
    } else {
      this.submitUrl(urlLink);
    }
  };

  submitUrl = (URL) => {
    fetch(URL)
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        const items = data.querySelectorAll("item");
        if (!items.length) {
          alert("Error with the URL! No posts found :(");
          this.setState({ rssItems: [] });
        } else {
          const elements = Array.from(items);
          this.setState({ rssItems: elements });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error with the URL! Can't retrieve posts :(");
        this.setState({ rssItems: [] });
      });
    this.setState({ urlLink: "" });
  };

  render() {
    return (
      <div className="Posts">
        {"Enter a URL Link : "}
        <input
          className="urlName"
          onChange={this.handleUrlName}
          value={this.state.urlLink}
        />{" "}
        <button onClick={() => this.validateUrl()}>Submit</button>
        <br />
        <br />
        <Postlist rssItems={this.state.rssItems} />
      </div>
    );
  }
}

export default Posts;
