import React from "react";
import styled from "styled-components";
import IconSVG from "./InlineSVG";
import Track from "./Track";

export default function Hottest() {
  return (
    <Styles>
      <h3 className="heading">Tracks of the Week</h3>
      <div className="track-list">
        <Track />
        <Track />
        <Track />
        <Track />
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  .track-list {
    height: 210px;
    margin: 25px;
    overflow-x: auto;

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
