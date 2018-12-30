import React from 'react';
import { withContext } from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Wrapper from '../components/wrapper';
import Card from '../components/card';
import { Menu, Item } from '../components/navbar';
import PlayButton from '../components/play-button';

const Container = styled(Wrapper)`
  background:#fff;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
const PlayerHand = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  margin-top:auto;
`

function shuffle(array) {
  ///https://github.com/Daplie/knuth-shuffle/blob/master/index.js
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    const { fn: { getBlackCard, getWhiteCard } } = props.context;
    const black = getBlackCard();
    const whites = Array(6).fill('').reduce(prev => {
      const card = getWhiteCard(prev.indexes);
      return {
        cards: [...prev.cards, card],
        indexes: [...prev.indexes, card.index]
      }
    }, {
        cards: [],
        indexes: []
      });
    this.state = {
      black_card: black,
      player_hand: whites.cards,
      usedWhite: [],
      usedBlack: [],
      pickedCards: []
    }
  }
  select = (card) => () => {
    const { black_card: { val: { pick } }, pickedCards } = this.state;
    if (pickedCards.indexOf(card.index) > -1) {
      this.setState(({ pickedCards }) => ({
        pickedCards: pickedCards.filter(e => e !== card.index)
      }))
      return;
    }
    this.setState(({ pickedCards }) => ({
      pickedCards: [card.index, ...pickedCards].slice(0, pick)
    }));
  }
  play = () => {
    const { pickedCards, black_card } = this.state;
    const active = pickedCards.length === black_card.val.pick;
    if (!active)
      return;

    this.setState(({ black_card, pickedCards, usedBlack, usedWhite }) => ({
      usedBlack: [...usedBlack, black_card.index],
      usedWhite: [...usedWhite, ...pickedCards],
    }), () => {
      this.generateNew();
    })
  }
  generateNew = () => {
    const { fn: { getBlackCard, getWhiteCard } } = this.props.context;
    const { pickedCards, usedWhite, usedBlack, player_hand } = this.state;
    const newCards = Array(pickedCards.length).fill('').map(() => getWhiteCard(usedWhite));
    const question = getBlackCard(usedBlack);
    this.setState({
      player_hand: [...shuffle([...player_hand.filter(e => pickedCards.indexOf(e.index) < 0), ...newCards])],
      black_card: question,
      pickedCards: []

    });
  }
  render() {
    const { black_card, player_hand, pickedCards } = this.state;
    const active = pickedCards.length === black_card.val.pick;
    return (
      <Container>
        <Menu>
          <Link to={'/'}><Item>Back</Item></Link>
        </Menu>
        <Card question text={black_card.val.text} />

        <PlayerHand>
          {player_hand.map((e, index) => (
            <Card key={index} text={e.val}
              onClick={this.select(e)}
              active={pickedCards.indexOf(e.index) > -1}
            />
          ))}
        </PlayerHand>
        <PlayButton active={active} onClick={this.play}>
          Pick {black_card.val.pick}
        </PlayButton>
      </Container>
    )
  }
}

export default withContext(Game);