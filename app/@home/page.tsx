import HomeHeader from "@components/HomeHeader";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "@lib/client/utile";
import React, { useState } from "react";
import PostTweetForm from "@components/PostTweetForm";
import TimeLine from "@components/TimeLine";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@lib/client/firebase";

function HomePage() {
  return (
    <div className="bg-background flex justify-center">
      <HomeHeader />
      <div className="w-full py-5 sm:max-w-xl">
        <PostTweetForm />
        <TimeLine />
      </div>

      <div className="hidden lg:flex">3</div>
    </div>
  );
}

export default HomePage;
