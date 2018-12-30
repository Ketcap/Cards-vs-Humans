import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Card from '../components/card';
import StartButton from '../components/game-start';

import { blackCards, whiteCards } from '../lib/cah.json';
const randomValue = (arr) => (arr[Math.floor(Math.random() * arr.length)])

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