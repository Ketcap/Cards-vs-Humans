import styled from 'styled-components';

const Wrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  box-sizing: border-box;
  flex-direction:column;
`
const W = styled(Wrapper)`
  background:#1f1f1f;
`

const NotFound = styled.img`
  max-width:100%;
`
const List = styled.ul`
  margin:0;
  padding:10px;
  box-sizing: border-box;
  list-style:none;
  display:flex;
  flex-direction:column;
  width: 100%;
  > * {
    font-family:Amiko
  }
`
const Item = styled.li`
  box-sizing: border-box;
  margin:10px 0;
  padding:10px;
  background-color:#f3f3f3;
  box-shadow:0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const Line = styled.h4`
  text-align:justify;
  margin:0;
  padding:0;
  line-height:1.5;
`

export {
  Wrapper, W, NotFound, List, Item, Line
}