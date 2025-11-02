import React from "react";
import NavigationBar from "../components/NavigationBar";

function VideoSection() {
  const videoSectionStyling = "d-flex justify-content-center";

  return <h1 className={videoSectionStyling}>VIDEO</h1>;
}

function BucketSection() {}

export default function Features() {
  return (
    <>
      <NavigationBar />
      <VideoSection />
      <BucketSection />
    </>
  );
}
