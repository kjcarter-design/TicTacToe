import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Board from "./components/Board";

export default () => (
  <PageContainer>
    <Header/>
    <Board />
  </PageContainer>
);

const PageContainer = styled.div`
min-height: 100%;
min-width: 100%;
margin: 0;
display: grid;
grid-template-rows: 1fr 5fr;
grid-template-areas: 'header'
'board'
;
justify-content: center;
`;