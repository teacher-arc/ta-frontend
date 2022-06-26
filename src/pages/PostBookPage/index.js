import React from "react";
import PostAssignment from "./PostAssignment";
import { Link } from "@chakra-ui/react";
import * as ROUTESLIST from "./../../routes";
import BookLiveSession from "./BookLiveSession";
import RectangleIllustration from "../../widgets/RectangleIllustration";
function MentorMeet() {
  return (
    <div>
      <Link href={ROUTESLIST.POST_ASSIGNMENT}>Post Assignment</Link>
      <Link href={ROUTESLIST.BOOK_LIVE_SESSION}>Book Live Session</Link>
      <RectangleIllustration />
    </div>
  );
}

export default MentorMeet;
