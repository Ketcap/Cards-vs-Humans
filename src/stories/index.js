import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import { Context, CAH } from '../context';
import Card from '../components/card';
import StartButton from '../components/game-start';

import { blackCards, whiteCards } from '../lib/cah.json';
const randomPick = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return {
    val: arr[index],
    index
  }
}

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Card', module)
  .add('White Card', () => (
    <Card text={randomValue(whiteCards)} />
  ))
  .add('Black Card', () => (
    <Card question text={randomValue(blackCards).text} />
  ))
  .add('Question and Answer', () => {
    const question = randomValue(blackCards);
    return (
      <>
        <Card question text={question.text} />
        {[...new Array(question.pick).fill()].map(e =>
          <Card text={randomValue(whiteCards)} />
        )}
      </>
    )
  })
storiesOf('Button', module)
  .add('StartButton', () => (
    <div style={{ display: 'flex', flex: 1, backgroundColor: '#1f1f1f' }}>
      <StartButton />
    </div>
  ))

// storiesOf('History', module)
//   .addDecorator(story => (
//     <Context>
//       {story()}
//     </Context>
//   ))
//   .add('Empty List', () => (
//     <div style={{ width: '375px', height: '812px' }}>
//       <History />
//     </div>
//   ))
//   .add('Non Empty List', () => {
//     const history = [...new Array(5).fill('').map(e => {
//       const question = randomPick(blackCards);
//       const answer = [...new Array(question.val.pick).fill('').map(e => randomPick(whiteCards))];
//       return {
//         black_card: question,
//         white_cards: answer,
//         play_date: new Date()
//       }
//     })];
//     return (
//       <div style={{ width: '375px', height: '812px' }}>
//         <History history={history} />
//       </div>
//     )
//   })