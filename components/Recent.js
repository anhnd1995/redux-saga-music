import React from "react";
import styled from "styled-components";

export default function Recent() {
  return (
    <Styles>
      <h3 className="heading">Recent Artists</h3>
      <div className="recent-list">
        <div className="recent-item">
          <img
            src="https://cdn.dribbble.com/users/411475/screenshots/14321259/media/7f7e063ca0bba24983a478d328aeecee.jpg?compress=1&resize=1000x750"
            alt=""
          />
        </div>
        <div className="recent-item">
          <img
            src="https://cdn.dribbble.com/users/411475/screenshots/13751544/media/f738c9218276bc9501cc1ebbabf77c33.png?compress=1&resize=1000x750"
            alt=""
          />
        </div>
        <div className="recent-item">
          <img
            src="https://cdn.dribbble.com/users/411475/screenshots/13544773/media/ea8bb04d924af2ada6c128ce8d234442.jpg?compress=1&resize=1000x750"
            alt=""
          />
        </div>
        <div className="recent-item">
          <img
            src="https://cdn.dribbble.com/users/411475/screenshots/13265096/media/604401ae24a086c3739f4ebcdbc4e792.png?compress=1&resize=1000x750"
            alt=""
          />
        </div>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  .recent-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
  }

  .recent-item {
    aspect-ratio: 1/1;
    width: 127px;
    cursor: pointer;
    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
