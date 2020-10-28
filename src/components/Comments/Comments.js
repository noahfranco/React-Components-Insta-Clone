import React from "react";
import Comment from "./Comment";
import "./Comments.css";

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log("comment props: ", props.comments);

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {props.comments.map((res) => (
        <Comment key={res.id} comments={res} />
      ))}
    </div>
  );
};

export default Comments;
