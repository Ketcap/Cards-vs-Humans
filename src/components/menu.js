import React from 'react';
import styled from 'styled-components';

const Sub = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  height:65px;
  padding:10px;
  background:#e55e4b;
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  box-sizing: border-box;
`
const Item = styled.div`
  font-family:'Amiko';
  font-weight:600;
  display:flex;
  flex:1;
  align-items:center;
  justify-content:center;
  color:#fffffd;
  cursor:pointer;
  font-size:16;
  transition: font-size 250ms linear;
  &:hover{
    font-size:20px
  }
`

export const SubMenu = (props) => (
  <Sub>
    {props.children}
  </Sub>
)

export const MenuItem = ({ children, onClick = () => { } }) => (
  <Item onClick={onClick}>
    {children}
  </Item>
)