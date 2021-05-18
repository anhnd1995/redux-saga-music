import React from "react";
import styled from "styled-components";

export default function Friends() {
  return (
    <Styles className="friends">
      <h3 className="heading">Friend Activity</h3>

      {[...Array(6)].map((item, index) => (
        <div className="friend-item" key={`${index}-abc`}>
          <div className="friend-avatar">
            <img src="https://source.unsplash.com/random" alt="friend avatar" />
          </div>
          <div className="friend-info">
            <div className="person-name">Amber Holmes</div>
            <div className="track-name">Ash - White Desert</div>
          </div>
        </div>
      ))}
    </Styles>
  );
}

const Styles = styled.div`
  padding: 0 20px;
  margin-top: 20px;
  overflow-x: auto;

  .friend-item {
    display: flex;
    margin: 25px 0;
  }

  .friend-avatar {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    img {
      border-radius: 100rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
