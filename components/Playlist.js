import React from "react";
import styled from "styled-components";
import PlaylistItem from "./PlaylistItem";

export default function Playlist() {
  return (
    <Styles>
      <PlaylistItem />
      <PlaylistItem />
      <PlaylistItem />
      <PlaylistItem />
    </Styles>
  );
}

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
`;
