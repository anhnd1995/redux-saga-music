import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family:  Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  html {
  box-sizing: border-box;
  }
  *{
  margin: 0;
  padding: 0;
  }
  *,*:before,*:after {
  box-sizing: border-box;
  }
  input,
  textarea,
  select,
  button{
  outline: none;
  }
  input{
  line-height: normal;
  }
  label,
  button{
  cursor: pointer;
  }
  a {
  text-decoration: none;
  }
  img {
  display: block;
  max-width: 100%;
  }
  .heading{
    color: ${(props) => props.theme.heading};
  }
  .person-name {
    margin-bottom: 5px;
  }
  .track-name {
    font-size: 12px;
    opacity: 0.6;
  }

`;
