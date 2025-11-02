import React from "react";
import NavigationBar from "../components/NavigationBar";

import DEFAULT_VIDEO from "../assets/video/default_scuff_video.mp4";
import DEFAULT_THUMBNAIL from "../assets/image/band-stock-photo.webp";
import { useNavigate } from "react-router";

function VideoSection() {
  const videoSectionStyling =
    "flex justify-center align-center items-center mt-18 mb-18";

  return (
    <div className={videoSectionStyling}>
      <video controls className="h-96">
        <source src={DEFAULT_VIDEO} />
        Your browser does not support this media playback
      </video>
    </div>
  );
}

function BucketSection() {
  const navigate = useNavigate();
  const handleArticleNavigation = () => {
    navigate("/articles/no-cameo-no-problem");
  };

  const sectionStyling =
    "flex flex-col justify-center align-center items-center";
  const sectionTitleStyling = "font-the-seasons text-2xl mb-8";

  const bucketsStyling = "flex gap-1 justify-around mx-8";

  const thumbnailStyling =
    "poppins-extralight max-w-[25%] hover:cursor-pointer";
  const thumbnailTitleStyling = "font-the-seasons mt-2 mb-1";
  const thumbnailContentStyling = "text-xs leading-[140%]";

  return (
    <div className={sectionStyling}>
      <h1 className={sectionTitleStyling}>Interviews</h1>
      <div className={bucketsStyling}>
        <div className={thumbnailStyling} onClick={handleArticleNavigation}>
          <img src={DEFAULT_THUMBNAIL} alt="artist thumbnail" />
          <p className={thumbnailTitleStyling}>
            Scuff x No Cameo: No Cameo, No Problem
          </p>
          {/* <p></p> - Signpost for article type */}
          <p className={thumbnailContentStyling}>
            We talk to up-and-coming art punk band No Cameo about their new
            single and future plans, as well as the band's hot takes on the
            Leeds music scene, the existence of God, and the Beatles.
          </p>
        </div>
        <div className={thumbnailStyling}>
          <img src={DEFAULT_THUMBNAIL} alt="artist thumbnail" />
          <p className={thumbnailTitleStyling}>
            Scuff x No Cameo: No Cameo, No Problem
          </p>
          {/* <p></p> - Signpost for article type */}
          <p className={thumbnailContentStyling}>
            We talk to up-and-coming art punk band No Cameo about their new
            single and future plans, as well as the band's hot takes on the
            Leeds music scene, the existence of God, and the Beatles.
          </p>
        </div>
        <div className={thumbnailStyling}>
          <img src={DEFAULT_THUMBNAIL} alt="artist thumbnail" />
          <p className={thumbnailTitleStyling}>
            Scuff x No Cameo: No Cameo, No Problem
          </p>
          {/* <p></p> - Signpost for article type */}
          <p className={thumbnailContentStyling}>
            We talk to up-and-coming art punk band No Cameo about their new
            single and future plans, as well as the band's hot takes on the
            Leeds music scene, the existence of God, and the Beatles.
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {}

export default function Home() {
  return (
    <>
      <NavigationBar />
      <VideoSection />
      <BucketSection />
    </>
  );
}
