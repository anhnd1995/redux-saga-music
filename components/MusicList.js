import React, { useEffect } from "react";
import { GET_TRACKS_REQUESTED } from "../redux/actions/music-action";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

export default function MusicList() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_TRACKS_REQUESTED });
  }, [dispatch]);

  const tracks = useSelector((state) => state.tracks);

  return <Styles></Styles>;
}

const Styles = styled.div``;
