import React from "react";
import Post from "./Post";

const Postlist = (props) => {
  return (
    <div className="Postlist">
      {props.rssItems.length ? (
        <div>
          <h4>Post List:</h4>
          {props.rssItems.map((el, i) => (
            <Post element={el} key={i} />
          ))}
        </div>
      ) : (
        <div>No Posts to display! :(</div>
      )}
    </div>
  );
};

export default Postlist;
