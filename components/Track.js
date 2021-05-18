import React from "react";

import styled from "styled-components";
import Artist from "./Artist";
import IconSVG from "./InlineSVG";

export default function Track() {
  return (
    <Styles>
      <Artist />
      <div className="track-option">
        <div className="track-count">
          <IconSVG
            src="/images/icons/headphone.svg"
            color="white"
            width="20px"
            height="20px"
          />
          <span className="track-view">255k</span>
        </div>
        <IconSVG
          src="/images/icons/heart.svg"
          width="20px"
          height="20px"
          className="--gray"
        />
        <button className="play-btn">
          <IconSVG
            src="/images/icons/play-button.svg"
            width="12px"
            height="12px"
            color="white"
          />
        </button>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  .artist {
    display: flex;
  }

  .track-view {
    font-size: 14px;
    margin-left: 10px;
  }

  .track-option {
    display: flex;
    align-items: center;

    > * {
      margin-left: 30px;
    }
  }
  .track-count {
    display: flex;
    align-items: flex-end;
  }
  .play-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  .artist-img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
  .artist-pic {
    border-radius: 7px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
