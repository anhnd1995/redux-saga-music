import React from "react";
import styled from "styled-components";
import InlineSVG from "./InlineSVG";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Styles>
      <div className="logo">
        <InlineSVG src="\images\icons\spotify.svg" width="40px" height="40px" />
      </div>
      <SidebarNav>
        <Link href="#">
          <a className="sidebar-item active">
            <InlineSVG
              src="\images\icons\home.svg"
              width="20px"
              height="auto"
              color="white"
            />
          </a>
        </Link>
        <Link href="#">
          <a className="sidebar-item">
            <InlineSVG
              src="\images\icons\compass.svg"
              width="20px"
              height="20px"
              color="white"
            />
          </a>
        </Link>
        <Link href="#">
          <a className="sidebar-item">
            <InlineSVG
              src="\images\icons\microphone-black-shape.svg"
              width="20px"
              height="20px"
              color="white"
            />
          </a>
        </Link>
        <Link href="#">
          <a className="sidebar-item">
            <InlineSVG
              src="\images\icons\trending.svg"
              width="20px"
              height="20px"
              color="white"
            />
          </a>
        </Link>
        <Link href="#">
          <a className="sidebar-item">
            <InlineSVG
              src="\images\icons\more-white.svg"
              width="20px"
              height="20px"
              color="white"
            />
          </a>
        </Link>
      </SidebarNav>
    </Styles>
  );
}

const Styles = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    text-align: center;
    padding-top: 1rem;
  }
  .active {
    opacity: 1;
  }
`;

const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  > * {
    flex: 1;
    margin: 20px 0;
    opacity: 0.6;
  }
`;
