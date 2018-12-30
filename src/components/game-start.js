import React from 'react';
import styled from 'styled-components';

const StartButton = styled.div`
  font-family:'Amiko';
  font-weight:600;
  font-size:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  width:${props => props.start ? `100%` : `50px`};
  height: ${props => props.start ? `100%` : `50px`};
  padding: 15px;
  border-radius:${props => props.start ? `0` : `100%`};
  background: #e55e4b;
  color: #fffffd;
  margin: ${props => props.start ? `0` : `10px`};
  transition: all 500ms cubic-bezier(0.860, 0.000, 0.070, 1.000);
  z-index:99;
`;

export default ({ start = false, onClick }) => (
  <StartButton start={start ? 1 : 0} onClick={onClick}>
    GO
  </StartButton>
)
