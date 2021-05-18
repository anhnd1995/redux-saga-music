import React from "react";

export default function Artist() {
  return (
    <div className="artist">
      <div className="artist-img">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="artist avatar"
          className="artist-pic"
        />
      </div>
      <div className="artist-info">
        <div className="person-name">Jan Bonvist</div>
        <div className="track-name">The Space In Between</div>
      </div>
    </div>
  );
}
