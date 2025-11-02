import DEFAULT_ARTIST_IMAGE from "../../assets/image/band-stock-photo.webp";

export default function ArtistOverviewCard() {
  const artistDetails = "mx-4";
  const artistNameStyling = "font-the-seasons";
  const pronounStyling = "poppins-extralight text-xs text-[#939393]";
  const instrumentNameStyling = "poppins-extralight text-xs text-[#939393]";

  return (
    <div className="flex justify-center align-center my-12">
      <div className="border p-4 flex justify-between align-center max-w-[75%]">
        <div className="p-4 flex justify-center ">
          <img
            src={DEFAULT_ARTIST_IMAGE}
            alt="No Cameo group shot"
            className="h-32 w-72"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row border-b-1 p-2 justify-center space-between">
            <p className="font-yaow text-xl">No Cameo</p>
            <p className="font-the-seasons-light text-xl">
              {" "}
              .... Win a Fortune
            </p>
          </div>
          <div className="flex flex-row border-b-1 p-3">
            <div className={artistDetails}>
              <p className={artistNameStyling}>AJ Byrne</p>
              <p className={pronounStyling}>They/Them</p>
              <p className={instrumentNameStyling}>Guitar, Vocals</p>
            </div>
            <div className={artistDetails}>
              <p className={artistNameStyling}>Miles</p>
              <p className={pronounStyling}>He/Him</p>
              <p className={instrumentNameStyling}>Guitar, Vocals</p>
            </div>
            <div className={artistDetails}>
              <p className={artistNameStyling}>Mag</p>
              <p className={pronounStyling}>He/Him</p>
              <p className={instrumentNameStyling}>Bass, Vocals, Production</p>
            </div>
            <div className={artistDetails}>
              <p className={artistNameStyling}>Will</p>
              <p className={pronounStyling}>He/Him</p>
              <p className={instrumentNameStyling}>Drums</p>
            </div>
          </div>
          <div className="flex p-2 justify-center poppins-extralight text-sm">
            <span className="poppins-light mx-1">@NoCameo</span> on Spotify,
            Apple Music, Bandcamp
          </div>
        </div>
      </div>
    </div>
  );
}
