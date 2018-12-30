import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding:10px;
  background-color:${props => props.question ? '#171717' : '#f3f3f3'};
  color:${props => props.question ? '#fcfcfc' : '#050505'};
  box-shadow: ${props => props.active ? '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' : ''};
  border-radius:10px;
  margin:10px;
  font-family:'Amiko';
  font-weight:${props => props.question ? 400 : 600};
  transition: all 250ms linear;
  line-height:1.5;
`;

export default ({ question = false, text, onClick, active = false }) => (
  <Card question={question}
    dangerouslySetInnerHTML={{ __html: text }}
    onClick={onClick}
    active={active}
  />
)
