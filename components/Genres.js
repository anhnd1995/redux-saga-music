import React from "react";
import styled from "styled-components";

export default function Genres() {
  return (
    <Styles>
      <h3 className="heading">Genres</h3>
      <ul className="genre-list">
        {[
          "Hip hop",
          "House",
          "Electirc",
          "Chillout",
          "Hip hop",
          "House",
          "Electirc",
          "Chillout",
        ].map((item, index) => (
          <li key={`${item}-${index}`} className="genre-item">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>

      <div className="genre-bottom">
        <a href="#" className="genre-all">
          All Genres
        </a>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  .genre-list {
    text-align: center;
    padding: 20px 20px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .genre-item {
    width: 33%;
    padding-right: 15px;
    padding-bottom: 20px;
    opacity: 0.7;
    transition: all 0.3s ease;
    &:hover {
      opacity: 1;
    }
  }
  .genre-bottom {
    text-align: center;
    display: block;
    margin: 0 auto;
  }
  .genre-all {
    padding: 10px 15px;
    border-radius: 40px;
    background-color: black;
    transition: all 0.2s linear;
    &:hover {
      filter: invert(100%);
    }
  }
`;
