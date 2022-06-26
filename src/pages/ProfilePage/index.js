import React from "react";
import AboutSection from "../../components/AboutSection";
import NameSection from "../../components/NameSection";
import TopBanner from "../../components/TopBanner";
import RecordBook from "../../components/RecordBook";
import { Grid, GridItem } from "@chakra-ui/react";
import NavigationBar from "../../widgets/NavigationBar";

const ProfilePage = () => {
  return (
    <div>
      
      <Grid
        h="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={8}
        alignContent='center'
      >
        <GridItem rowSpan={2} colSpan={6}  >
        <TopBanner />
        <AboutSection />
        </GridItem>
        <GridItem rowSpan={2} colSpan={2}/>
        <GridItem rowSpan={2} colSpan={4} paddingLeft='12px'> <NameSection /></GridItem>
        <GridItem rowSpan={2} colSpan={2}/>
        <GridItem rowSpan={2} colSpan={4} padding="24px">
        <RecordBook />
        </GridItem>

      </Grid>
     
     
      
    </div>
  );
};

export default ProfilePage;
