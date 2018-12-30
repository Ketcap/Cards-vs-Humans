import styled from 'styled-components';

export default styled.div`
  font-family:'Amiko';
  font-weight:600;
  width:100%;
  height:55px;
  display:flex;
  justify-content:center;
  align-items:center;
  background:${props => props.active ? `#11b719` : `#ECEFF5`};
  color:${props => props.active ? `#fff` : `#4c5765`};
  transition: all 250ms linear;
`