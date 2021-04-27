import React from "react";
import styled from "styled-components";
import SVG, { Props as SVGProps } from "react-inlinesvg";
import InlineSVG from "./InlineSVG";

export default function Sidebar() {
  return (
    <Styles>
      {/* <InlineSVG src="\images\icons\compass.svg" width={15} fill="white" /> */}
      <div className="logo">
        <InlineSVG src="\images\icons\spotify.svg" width={40} height="auto" />
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  grid-area: sidebar;

  .logo {
    text-align: center;
    padding-top: 1rem;
  }
`;
