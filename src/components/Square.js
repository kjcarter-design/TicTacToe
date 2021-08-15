import React from "react";
import styled from "styled-components";

const Square = ({value}) => {

  return <Grid type="button">{value}</Grid>;
};

export default Square;

const Grid = styled.button`
background-color: white;
border: 5px outset gold;
height: 15vh;
width: 30vw;


`;