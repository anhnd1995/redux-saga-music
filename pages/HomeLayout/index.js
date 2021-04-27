import React from "react";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";

export default function index() {
  return (
    <Styles>
      <Sidebar />
      <div className="navbar"></div>
      <div className="main"></div>
      <div className="friends"></div>
    </Styles>
  );
}

const Styles = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 60px 1fr 20%;
  grid-template-rows: 10% auto;
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
