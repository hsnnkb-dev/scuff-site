import React from "react";
import NavigationBar from "../components/NavigationBar";
import "../index.css";

export default function About() {
  return (
    <>
      <NavigationBar />
      <div className="m-6">
        <h1>
          The Text below should display in the seasons but displays times new
          roman
        </h1>
        <p className="theseasonslight">Sample Text 1 - light</p>
        <p className="theseasonsregular">Sample Text 2 - Regular</p>
        <p className="theseasonsbold">Sample Text 3 - Bold</p>
      </div>

      <div className="m-6">
        <h1>
          The text below uses the demo package of the seasons and provides an
          example for what the fonts above should look like
        </h1>
        <p className="font-the-seasons-light">Demo Text 1 - light</p>
        <p className="font-the-seasons">Demo Text 2 - Regular</p>
        <p className="font-the-seasons-bold">Demo Text 3 - Bold</p>
      </div>
    </>
  );
}
