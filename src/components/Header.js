import React from "react";
import styled from "styled-components";

import logo from '../assets/logo.gif'

export default class Header extends React.Component {



  render() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt='Logo' />
      <Headertxt>TIC TAC TOE</Headertxt>
      <div></div>
    </HeaderContainer>
  );
};
}

const HeaderContainer = styled.div`
display: grid;
grid-template-columns: .5fr 2fr .5fr;
grid-template-areas: 'logo txt menu';
width: 100%;
grid-area: header;
justify-self: center;
background-color: white;
`;

const Logo = styled.img`
grid-area: logo;
justify-self: center;
align-self: center;
width: 100%;
`;

const Headertxt = styled.h1`
grid-area: txt;
justify-self: center;
align-self: center;
font-size: 4rem;
`;