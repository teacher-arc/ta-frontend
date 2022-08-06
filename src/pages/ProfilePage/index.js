import React, { useEffect } from "react";
import AboutSection from "../../components/AboutSection";
import NameSection from "../../components/NameSection";
import TopBanner from "../../components/TopBanner";
import RecordBook from "../../components/RecordBook";
import { Grid, GridItem } from "@chakra-ui/react";
import NavigationBar from "../../widgets/Navbar/NavigationBar";
import { useNavigate } from "react-router-dom";
import { getUser, userSelector, clearState } from "./../../slices/user.slice";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAssignmentByEmail,
  displayAssignmentSelector,
} from "./../../slices/displayAssignment.slice";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const records = useSelector(displayAssignmentSelector);
  const data = useSelector(userSelector);
  const email = localStorage.getItem("email");
  useEffect(() => {
    dispatch(getUser({ email }));
    dispatch(fetchAssignmentByEmail({ email }));
    return () => {
      dispatch(clearState());
    };
  }, []);
  useEffect(() => {
    if (isError) {
      alert(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
    }
  }, [isError, isSuccess]);
  if (isFetching) return <div>loading...</div>;
  return (
    <div>
      <Grid
        h="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={8}
        alignContent="center"
      >
        <GridItem rowSpan={2} colSpan={6}>
          <TopBanner />
          <AboutSection data={data} />
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} />
        <GridItem rowSpan={2} colSpan={4} paddingLeft="12px">
          <NameSection
            name={`${data.firstName}  ${data.lastName}`}
            location={data.location}
          />
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} />
        <GridItem rowSpan={2} colSpan={4} padding="24px">
          <RecordBook records={records.data} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default ProfilePage;
