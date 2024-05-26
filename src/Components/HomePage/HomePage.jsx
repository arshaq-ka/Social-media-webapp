import { Navigation } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import Navigations from "../Navigation/Navigations";
import HomeSection from "../HomeSection/HomeSection";
import RightPage from "../RightPart/RightPage";
import { Routes ,Route} from "react-router-dom";
import Profile from "../Profile/Profile";
import TweetDetails from "../TweetDetails/TweetDetails";
import Authentication from "../Authentication/Authentication";

function HomePage() {
  return (
    <Grid container xs={12} className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
        <Navigations />
      </Grid>

      <Grid
        item
        xs={12}
        lg={6}
        className=" px-5 lg:px-9 hidden lg:block w-full relative"
      >

         <Routes>
            <Route path='/' element={<HomeSection />}></Route>
            <Route path='/home' element={<HomeSection />}></Route>
            <Route path="/account/:id" element={<Profile />}></Route>
            <Route path="/twit/:id" element={<TweetDetails />}></Route>


         </Routes>
        
      </Grid>

      <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
        {/* <RightPage /> */}
      </Grid>
    </Grid>
  );
}
export default HomePage;
