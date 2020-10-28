// You do not need to change this file.
import React from "react";

const Comment = (props) => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  const { comment } = props;

  return (
    <div className="comment-text">
      <span className="user">{props.comments.username}</span>{" "}
      <span className="comment">{props.comments.text}</span>
    </div>
  );
};

export default Comment;
