import React from 'react';
import styled from 'styled-components';
import StartButton from '../components/game-start';
import { SubMenu, MenuItem } from '../components/menu';
import Wrapper from '../components/wrapper';

const Container = styled(Wrapper)`
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

export default class extends React.Component {
  state = {
    start: false
  }
  start = () => {
    this.setState({ start: true }, () => {
      setTimeout(() => {
        const { history } = this.props;
        history.push('/game');
      }, 500);
    });
  }
  render() {
    const { start } = this.state;
    return (
      <Container>
        <StartButton start={start} onClick={this.start} />
      </Container>
    )
  }
}