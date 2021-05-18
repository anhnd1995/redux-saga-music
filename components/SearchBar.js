import React from "react";
import styled from "styled-components";

export default function SearchBar() {
  return (
    <Styles>
      <span className="circle"></span>
      <input className="search-input" type="text" placeholder="Search..." />
    </Styles>
  );
}

const Styles = styled.div`
  margin-left: 20px;
  .circle {
    width: 15px;
    height: 15px;
    border-radius: 100rem;
    border: 2.5px solid white;
    display: inline-block;
    margin-right: 10px;
  }

  .search-input {
    background-color: transparent;
    border: none;
    color: white;

    &::-webkit-input-placeholder {
      color: white;
    }
    &::-moz-input-placeholder {
      color: white;
    }
  }
`;
