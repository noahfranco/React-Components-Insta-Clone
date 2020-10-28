import React, { useState } from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

const Post = (props) => {
  // 🔥 Make sure the parent of Post is passing the right props!
  // const { post, likePost } = props;
  // console.log("props from post: ", likePost);

  const [likes, setLikes] = useState(props.data.likes);

  const [comments, setComments] = useState(props.data.comments);

  const likePost = () => {
    try {
      setLikes((likes) => likes + 1)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="post-border">
      <PostHeader
        username={props.data.username}
        thumbnailUrl={props.data.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.data.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly?  */}
      <LikeSection likes={likes} likePost={likePost} />
      {/* Comments also wants its props! */}
      <Comments comments={comments} />
    </div>
  );
};

export default Post;
