import React from "react";
import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";

const IconStyles = styled.div`
  display: inline-flex;
  align-items: center;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  cursor: pointer;
  ${(props) =>
    props.stroke &&
    css`
      path {
        stroke: ${(props) => props.color};
      }
    `};
  ${(props) =>
    !props.stroke &&
    css`
      path {
        fill: ${(props) => props.color};
      }
    `};

  svg {
    height: 100%;
  }
  ${(props) =>
    props.className === "--gray" &&
    css`
      filter: grayscale(100%);
    `};
`;

const IconSVG = ({
  src,
  className = "",
  color = "",
  width = "",
  height = "",
  stroke,
}) => {
  return (
    <IconStyles
      className={className}
      color={color}
      stroke={stroke}
      width={width}
      height={height}
    >
      <SVG src={src} width={width} height={height}></SVG>
    </IconStyles>
  );
};

IconSVG.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  stroke: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default IconSVG;
