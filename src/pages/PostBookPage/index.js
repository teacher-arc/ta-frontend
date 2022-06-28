import React from "react";
import PostAssignment from "./PostAssignment";
import { Link } from "@chakra-ui/react";
import * as ROUTESLIST from "./../../routes";
import BookLiveSession from "./BookLiveSession";
import PostBookIllustrations from "../../widgets/PostBookIllustrations";
import "./index.css";
function MentorMeet() {
  return (
    <div className="PostBook-main">
      {/* TODO : Post illustration overlap with box */}
      {/* <PostBookIllustrations /> */}
      <PostAssignment />
    </div>
  );
}

export default MentorMeet;
