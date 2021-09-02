import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="flex items-center flex-col justify-center h-screen">
        <div className="flex w-9/12 ">
          <img alt="music" src="/sound.gif" className="w-1/2 mr-120"></img>
          <div class="flex flex-col justify-evenly">
            <h1 className="text-2xl font-display font-semibold ">
              View your listening habits
            </h1>
            <p>
              Log in with Spotify to find out how compatible your music taste is
              with your expectations. Although I use the Spotify API, I'm not
              affiliated with Spotify.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}
