import React from "react";
import NavigationBar from "../components/NavigationBar";

function VideoSection() {
  const videoSectionStyling =
    "flex justify-center align-center items-center my-20";

  return <h1 className={videoSectionStyling}>VIDEO</h1>;
}

function BucketSection() {}

export default function Home() {
  return (
    <>
      <NavigationBar />
      <VideoSection />
      <BucketSection />
    </>
  );
}
