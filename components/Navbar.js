import Link from "next/link";
import React from "react";
import styled from "styled-components";
import IconSVG from "./InlineSVG";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <Styles className="navbar">
      <div className="nav-left">
        <SearchBar />
        <div className="meta">
          <Link href="#">
            <a className="meta-item">Minimal</a>
          </Link>
          <Link href="#">
            <a className="meta-item">House</a>
          </Link>
          <Link href="#">
            <a className="meta-item">Minimal</a>
          </Link>
        </div>
        <div className="filters">
          <IconSVG
            src="/images/icons/filter.svg"
            color="white"
            width="20px"
            height="auto"
          />
          <span className="filter-text">Filters</span>
        </div>
      </div>
      <div className="nav-right">
        <div className="options">
          <IconSVG
            src="/images/icons/guarantee.svg"
            color="white"
            width="20px"
            height="auto"
          />
          <IconSVG
            src="/images/icons/settings.svg"
            color="white"
            width="20px"
            height="auto"
          />
          <IconSVG
            src="/images/icons/bell.svg"
            color="white"
            width="20px"
            height="auto"
          />
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="user avatar"
            className="user-avatar"
          />
        </div>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  padding: 0 20px;

  .nav-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    flex: 1;
  }

  .meta {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
  }

  .nav-right {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .filters {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
  .meta-item,
  .filter-text {
    color: white;
    opacity: 0.7;
    font-weight: 600;
    margin-left: 15px;
    transition: all 0.3 ease;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }

  .options {
    display: flex;
    align-items: center;
    padding: 0 20px;
    > * {
      margin-right: 20px;
      opacity: 0.7;
      cursor: pointer;
      transition: all 0.3 ease;
      &:hover {
        opacity: 1;
      }
    }
  }

  .user {
    width: 50px;
    height: 50px;
  }
  .user-avatar {
    border-radius: 100rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
