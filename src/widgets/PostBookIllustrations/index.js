import React from "react";
import "./index.css";
import PostBookIllustration from "./../../Assets/postbookillustration.png";
import RectangleIllustration from "../RectangleIllustration";

function PostBookIllustrations() {
  return (
    <div className="PostBook-images">
      <img
        src={PostBookIllustration}
        alt="Post Book Illustration"
        className="PostBook-illustration"
      />
      <RectangleIllustration />
    </div>
  );
}

export default PostBookIllustrations;
