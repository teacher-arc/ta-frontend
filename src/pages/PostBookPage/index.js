import React from "react";
import { useTranslation } from "react-i18next";
import PostAssignment from "./PostAssignment";
import { Link } from "@chakra-ui/react";
import * as ROUTESLIST from "./../../routes";
import BookLiveSession from "./BookLiveSession";
import "./index.css";
function MentorMeet() {
  return (
    <div className="PostBook-main">
      {/* TODO : Post illustration overlap with box */}
      <PostAssignment />
    </div>
  );
}

export default MentorMeet;
