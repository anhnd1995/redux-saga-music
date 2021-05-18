import React from "react";
import styled from "styled-components";
import Genres from "./Genres";
import Hottest from "./Hottest";
import IconSVG from "./InlineSVG";
import Playlist from "./Playlist";
import Recent from "./Recent";

export default function MainContent() {
  return (
    <Styles className="main">
      <Playlist />
      <div className="features">
        <Genres />
        <Hottest />
        <Recent />
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  padding: 0 20px;

  .features {
    display: grid;
    grid-template-columns: 1fr 2fr 0.9fr;
  }
`;
