import React from "react";
import styled from "styled-components";
import IconSVG from "./InlineSVG";

export default function PlaylistItem({
  src = "https://source.unsplash.com/random",
}) {
  return (
    <Styles className="playlist-item">
      <img src={src} alt="playlist thumbnails" className="playlist-img" />
      <div className="playlist-content">
        <span>26 Tracks</span>
        <div className="playlist-bottom">
          <button className="play-btn">
            <IconSVG
              src="/images/icons/play-button.svg"
              color="white"
              width="15px"
              height="15px"
            />
          </button>
          <div className="playlist-item">
            <h5 className="playlist-title">Daily Mix</h5>
            <p className="playlist-desc">Update every friday</p>
          </div>
        </div>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  height: 100%;
  width: calc(25% - 20px);
  aspect-ratio: 1/1.4;
  position: relative;

  &::after {
    border-radius: 40px;
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  .playlist-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
  }
  .playlist-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    z-index: 1;
  }

  .play-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 100rem;
    background-color: ${(props) => props.theme.primary};
    border: none;
  }
  .playlist-bottom {
    display: flex;
    align-items: center;
  }
  .playlist-item {
    padding-left: 20px;
  }
  .playlist-desc {
    font-size: 14px;
    opacity: 0.8;
  }
`;

import PropTypes from "prop-types";

PlaylistItem.propTypes = {
  src: PropTypes.string,
};
