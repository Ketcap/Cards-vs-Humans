import React from 'react';
import { blackCards, whiteCards } from './lib/cah.json';

const CAH = React.createContext();

const randomPick = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return {
    val: arr[index],
    index
  }
}

class Context extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
  }
  getBlackCard = (used = []) => {
    const blacks = blackCards.filter((e, i) => used.indexOf(i) < 0);
    return randomPick(blacks);
  }
  getWhiteCard = (used = []) => {
    const whites = whiteCards.filter((e, i) => used.indexOf(i) < 0);
    return randomPick(whites);
  }
  render() {
    return (
      <CAH.Provider
        value={{
          ...this.state,
          fn: {
            getBlackCard: this.getBlackCard,
            getWhiteCard: this.getWhiteCard
          }
        }}
      >
        {this.props.children}
      </CAH.Provider>
    )
  }
}

const withContext = (Comp) => (
  class extends React.Component {
    render() {
      return (
        <CAH.Consumer>
          {context => <Comp {...this.props} context={context} />}
        </CAH.Consumer>
      )
    }
  }
)


export {
  Context, CAH, withContext
}