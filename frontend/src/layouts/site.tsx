import React, { useContext, Fragment } from "react";
import Navbar from "../components/Navbar";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

const StyledApp = styled.div`
  color: #000;
  margin:0 ;
  padding:0 ;
  display:flex ;
  justify-content:center ;
`;


type Props = {
  children : JSX.Element
}


export default function SiteLayout({ children }: Props) {
  return (
    <Fragment>
      <Navbar/>
      <StyledApp>{children}</StyledApp>
    </Fragment>
  );
}