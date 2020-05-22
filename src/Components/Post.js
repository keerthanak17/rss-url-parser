import React from "react";

const Post = (props) => {
  return (
    <div className="Post">
      <div>
        <div>{props.element.querySelector("title").innerHTML}</div>
      </div>
    </div>
  );
};

export default Post;
