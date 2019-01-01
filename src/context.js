import React from 'react';
import { blackCards, whiteCards } from './lib/cah.json';
import store from 'store'

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
    const history = store.get('history') || [];
    this.state = {
      history
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
  historyUpdate = (turn) => {
    this.setState(prev => ({
      history: [{ ...turn, play_date: new Date() }, ...prev.history]
    }), () => {
      const { history } = this.state;
      store.set('history', history);
    })
  }
  render() {
    return (
      <CAH.Provider
        value={{
          ...this.state,
          fn: {
            getBlackCard: this.getBlackCard,
            getWhiteCard: this.getWhiteCard,
            historyUpdate: this.historyUpdate
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