import styled from 'styled-components';

export const Menu = styled.div`
  min-height:55px;
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items:center;
  background:#e55e4b;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const Item = styled.span`
  font-family:'Amiko';
  font-weight:600;
  display:flex;
  padding:5px;
  color:#fffffd;
`