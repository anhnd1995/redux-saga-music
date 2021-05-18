import React from "react";
import styled from "styled-components";

export default function PlayingBar() {
  return (
    <Styles>
      <div className="artist"></div>
      <div className="player">
        <div className="player-control"></div>
        <div className="player-progress"></div>
        <div className="player-volumn"></div>
      </div>
      <div className="options"></div>
    </Styles>
  );
}

const Styles = styled.div`
  height: 60px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.playingBackground};
  width: 100%;
`;
