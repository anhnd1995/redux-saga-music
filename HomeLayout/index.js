import React from "react";
import styled from "styled-components";
import Friends from "../../components/Friends";
import MainContent from "../../components/MainContent";
import Navbar from "../../components/Navbar";
import PlayingBar from "../../components/PlayingBar";
import Sidebar from "../../components/Sidebar";

export default function index() {
  return (
    <Styles>
      <Sidebar />
      <Navbar />
      <MainContent />
      <Friends />
      <PlayingBar />
    </Styles>
  );
}

const Styles = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 60px 1fr 20%;
  grid-template-rows: 80px auto;
  grid-template-areas:
    "sidebar navbar navbar"
    "sidebar main friends";

  .navbar {
    /* background-color: green; */
    /* height: 100%; */
    grid-area: navbar;
  }
  .main {
    /* background-color: yellow; */
    /* height: 100%; */
    grid-area: main;
  }
  .friends {
    /* background-color: orange; */
    /* height: 100%; */
    grid-area: friends;
  }
`;
